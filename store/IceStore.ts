import { getIcegroupedByStatus } from '@/lib/getIceGroupedByStatus';
import { create } from 'zustand'

interface IceState {
  ice: Ice;
  getIce: () => void;
  newIceInput: string;
  setNewIceInput: (input: string) => void;
}

export const useIceStore = create<IceState>((set) => ({
  ice: {
    iceCreams: new Map<IceStatus, IceCream>()
  },
  getIce: async () => {
    const ice = await getIcegroupedByStatus()
    set({ ice })
  },
  newIceInput: "",
  setNewIceInput: (input: string) => set({ newIceInput: input })
}))
