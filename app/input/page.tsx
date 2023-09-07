"use client";

import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlavourItem from "../components/FlavourItem";

import { useAtom } from "jotai";
import { amountAtom, flavourAtom, flavourItemsAtom } from "@/store";

function AddNewProduct() {
  /// use State
  const [flavourItems, setFlavourItems] = useAtom(flavourItemsAtom);
  const [flavour, setFlavour] = useAtom(flavourAtom);
  const [amount, setAmount] = useAtom(amountAtom);

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
    setAmount("");
  };

  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default AddNewProduct;
