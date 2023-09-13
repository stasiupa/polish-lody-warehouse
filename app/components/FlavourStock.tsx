import React from "react";
import FlavourItem from "./FlavourItem";

type Props = {
  id: IceStatus;
  iceCreams: IceCreams[];
  index: Number;
};

const idIceCreamText: {
  [key in IceStatus]: string;
} = {
  "in-stock": "In Stock",
  "on-the-way": " On the way",
  "out-of-stock": "Out of stock",
};

function FlavourStock({ id, iceCreams, index }: Props) {
  return (
    <div className="bg-amber-700 text-gray-100  py-2 px-2 m-2 rounded-lg">
      <h2 className="font-bold text-xl flex justify-between">
        {idIceCreamText[id]}
        <span className="text-sm bg-amber-500 rounded-sm px-1 py-1">
          Flavours with current status: {iceCreams.length}
        </span>
      </h2>
      <div className="space-y-2">
        {iceCreams.map((iceCream, index) => (
          // eslint-disable-next-line react/jsx-key
          <FlavourItem iceCream={iceCream} id={id} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FlavourStock;
