"use client";

import React from "react";

type Props = {
  iceCream: IceCreams;
  id: IceStatus;
  index: number;
};

function FlavourItem({ iceCream, id, index }: Props) {
  return (
    <div className="flex bg-amber-600  space-x-2 my-2">
      <p>{iceCream.flavour}</p> <span>{iceCream.amount}</span>
    </div>
  );
}

export default FlavourItem;
