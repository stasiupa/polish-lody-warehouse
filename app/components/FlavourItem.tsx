import React from "react";
import { useIceStore } from "@/store/IceStore";

type Props = {
  iceCream: IceCream;
};

function FlavourItem({ iceCream }: Props) {
  const { deleteIce, editIce } = useIceStore();

  const handleDeleteIce = () => {
    deleteIce(iceCream.$id, iceCream.status);
  };
  const handleEditIce = () => {
    editIce(iceCream.$id, iceCream.status);
  };

  return (
    <div className="flex bg-amber-600 space-x-2 my-2">
      <div className="flex flex-grow">
        <p>{iceCream.flavour}</p> <span className="ml-2">{iceCream.amount}</span>
      </div>
      <span onClick={handleEditIce} className="flex bg-green-600 border border-black items-end">Edit</span>
      <span onClick={handleDeleteIce} className="flex bg-red-500 border border-black items-end">Delete</span>
    </div>
  );
}

export default FlavourItem;
