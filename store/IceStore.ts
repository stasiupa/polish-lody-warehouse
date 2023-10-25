import { ID, databases } from "@/appwrite";
import { getIcegroupedByStatus } from "@/lib/getIceGroupedByStatus";
import { create } from "zustand";

export const iceStatusOptions = {
  "in-stock": {
    label: "In stock",
    value: "in-stock",
  },
  "out-of-stock": {
    label: "Out of stock",
    value: "out-of-stock",
  },
  "on-the-way": {
    label: "On the way",
    value: "on-the-way",
  },
} as const;

export type IceStatus = keyof typeof iceStatusOptions;

interface IceState {
  ice: Record<IceStatus, IceCream[]>;
  getIce: () => void;

  newIceFlavour: string;
  newIceAmount: number;
  newIceStatus: IceStatus;

  setNewIceFlavour: (input: string) => void;
  setNewIceAmount: (input: number) => void;
  setNewIceStatus: (input: IceStatus) => void;

  searchString: string;
  setSearchString: (searchString: string) => void;


  addIce: (flavour: string, status: IceStatus, amount: number) => void;
  deleteIce: (id: string, status: IceStatus) => void;
  editIce: (id: string, status: IceStatus) => void;
}

export const useIceStore = create<IceState>((set) => ({
  ice: {
    "in-stock": [],
    "on-the-way": [],
    "out-of-stock": [],
  },
  getIce: async () => {
    const ice = await getIcegroupedByStatus();
    set({ ice });
  },

  newIceFlavour: "",
  newIceAmount: 0,
  newIceStatus: "in-stock",

  setNewIceFlavour: (input: string) => set({ newIceFlavour: input }),
  setNewIceAmount: (input: number) => set({ newIceAmount: input }),
  setNewIceStatus: (input: IceStatus) => set({ newIceStatus: input }),

  addIce: async (flavour: string, status: IceStatus, amount: number) => {
    try {
      const { $id, $createdAt } = await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_ICE_COLLECTION_ID!,
        ID.unique(),
        {
          flavour: flavour,
          status: status,
          amount: amount,
        }
      );
      set({ newIceFlavour: "" });
      set((state) => {
        const newFlavour: IceCream = {
          $id,
          amount,
          flavour,
          $createdAt,
          status,
        };

        const iceStock = state.ice[status];

        return {
          ice: {
            ...state.ice,
            [status]: [...iceStock, newFlavour],
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteIce: async (id: string, status: IceStatus) => {
    try {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_ICE_COLLECTION_ID!,
        id
      );
      set((state) => {
        const iceStock = state.ice[status];
        const newIceStock = iceStock.filter((ice) => ice.$id !== id);
        return {
          ice: {
            ...state.ice,
            [status]: newIceStock,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editIce: () => { },

  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
}));