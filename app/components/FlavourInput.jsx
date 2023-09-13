"use client";

import React, { useState } from "react";

function FlavourInput() {
  const [flavourItems, setFlavourItems] = useState([]);
  const [flavour, setFlavour] = useState();
  const [amount, setAmount] = useState();

  const handleFlavour = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlavour(e.target.value);
  };
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleSubmit = () => {
    const newItem = {
      flavour: flavour,
      amount: amount,
    };

    setFlavourItems([...flavourItems, newItem]);
    setFlavour("");
    setAmount(0);
  };
  return (
    <div>
      <form action="" className="flex justify-center space-x-5 items-center">
        <input
          type="text"
          className="border"
          placeholder="Enter flavour name..."
          onChange={handleFlavour}
          value={flavour}
        />
        <input
          type="number"
          className="border"
          placeholder="Enter ice cream amount..."
          onChange={handleAmount}
          value={amount}
        />
        <button
          type="button"
          className="bg-amber-700 text-gray-100 rounded-full py-2 px-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div className="flex flex-1">
        {flavourItems.map((item, index) => (
          <FlavourItem key={index} name={item.flavour} amount={item.amount} />
        ))}
        <h2></h2>
      </div>
    </div>
  );
}

export default FlavourInput;
