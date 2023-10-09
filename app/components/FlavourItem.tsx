"use client";
import React from "react";
import { useIceStore } from "@/store/IceStore";

type Props = {
  iceCream: IceCream;
};

function FlavourItem({ iceCream }: Props) {
  const { deleteIce } = useIceStore();

  const handleDeleteIce = () => {
    deleteIce(iceCream.$id, iceCream.status);
  };

  return (
    <div className="flex bg-amber-600  space-x-2 my-2">
      <p>{iceCream.flavour}</p> <span>{iceCream.amount}</span>
      <span onClick={handleDeleteIce} className="bg-red-500 border border-black">delete</span>
    </div>
  );
}

export default FlavourItem;