import React from "react";
import FlavourItem from "./FlavourItem";
import { IceStatus, iceStatusOptions } from "@/store/IceStore";

type Props = {
  id: IceStatus;
  iceCreams: IceCream[];
  index: Number;
};

function FlavourStock({ id, iceCreams, index }: Props) {
  return (
    <div className="bg-amber-700 text-gray-100  py-2 px-2 m-2 rounded-lg">
      <h2 className="font-bold text-xl flex justify-between">
        {iceStatusOptions[id].label}
        <span className="text-sm bg-amber-500 rounded-sm px-1 py-1">
          Flavours with current status: {iceCreams.length}
        </span>
      </h2>
      <div className="space-y-2">
        {iceCreams.map((iceCream, index) => (
          // eslint-disable-next-line react/jsx-key
          <FlavourItem iceCream={iceCream} key={iceCream.flavour} />
        ))}
      </div>
    </div>
  );
}

export default FlavourStock;