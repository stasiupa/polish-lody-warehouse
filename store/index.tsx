"use client";

import { atom, Provider } from "jotai";

export const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export const flavourAtom = atom("");
export const amountAtom = atom(null);
export const flavourItemsAtom = atom([]);
