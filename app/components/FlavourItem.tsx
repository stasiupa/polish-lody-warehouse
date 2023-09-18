"use client";

import { useIceStore } from "@/store/IceStore";
import React from "react";

type Props = {
  iceCream: IceCreams;
};

function FlavourItem({ iceCream }: Props) {
  const { deleteIce } = useIceStore();
  const handleDelete = () => {
    deleteIce(iceCream);
  };

  return (
    <div className="flex bg-amber-600  space-x-2 my-2 justify-normal items-center p-2">
      <div className="flex space-x-2 my-2">
        <p>Icecream flavour: {iceCream.flavour}</p>
        <span>{iceCream.amount}</span>
        <p>{iceCream.$id}</p>
        <p>{iceCream.$createdAt}</p>
      </div>
      <button
        className=" border-black  bg-red-600 border rounded-md p-1"
        onClick={handleDelete}
      >
        Delete record
      </button>
    </div>
  );
}

export default FlavourItem;
