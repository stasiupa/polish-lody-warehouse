import React from "react";

function FlavourItem(props) {
  return (
    <div className="bg-amber-700 text-gray-100 w-36 py-2 px-2 m-2 rounded-full">
      <div className="text-center">{props.name}</div>
      <div className="text-center">{props.amount} kg</div>
    </div>
  );
}

export default FlavourItem;
