import { ID, databases } from '@/appwrite';
import { getIcegroupedByStatus } from '@/lib/getIceGroupedByStatus';
import { create } from 'zustand'

interface IceState {
  ice: Ice;
  getIce: () => void;

  newIceFlavour: string;
  newIceAmount: number;
  newIceStatus: IceStatus;

  setNewIceFlavour: (input: string) => void;
  setNewIceAmount: (input: number) => void;
  setNewIceStatus: (input: IceStatus) => void;

  addIce: (flavour: string, status: IceStatus, amount: number) => void;
}

export const useIceStore = create<IceState>((set) => ({
  ice: {
    iceCreams: new Map<IceStatus, IceCream>()
  },
  getIce: async () => {
    const ice = await getIcegroupedByStatus()
    set({ ice })
  },


  newIceFlavour: "",
  newIceAmount: 0,
  newIceStatus: "in-stock",

  setNewIceFlavour: (input: string) => set({ newIceFlavour: input }),
  setNewIceAmount: (input: number) => set({ newIceAmount: input }),
  setNewIceStatus: (input: IceStatus) => set({ newIceStatus: input }),






  addIce: async (flavour: string, status: IceStatus, amount: number) => {
    const { $id } = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_ICE_COLLECTION_ID!,
      ID.unique(),
      {
        flavour: flavour,
        status: status,
        amount: amount
      }
    );
    set({ newIceFlavour: "" });
    set((state) => {
      const newStock = new Map(state.ice.iceCreams);
      const newFlavour: IceCreams = {
        $id,
        amount,
        flavour,
        $createdAt: new Date().toISOString(),
        status,
      };

      const iceStock = newStock.get(status);

      if (!iceStock) {
        newStock.set(status, {
          id: status,
          iceCreams: [newFlavour],
        });
      } else {
        newStock.get(status)?.iceCreams.push(newFlavour)
      }
      return {
        ice: {
          iceCreams: newStock
        }
      }
    })

  }
}))
