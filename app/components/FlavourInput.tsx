"use client";

import React from "react";

import { IceStatus, useIceStore } from "@/store/IceStore";

function FlavourInput() {
  const [
    addIce,
    newIceFlavour,
    setNewIceFlavour,
    newIceAmount,
    setNewIceAmount,
    newIceStatus,
    setNewIceStatus,
  ] = useIceStore((state) => [
    state.addIce,
    state.newIceFlavour,
    state.setNewIceFlavour,
    state.newIceAmount,
    state.setNewIceAmount,
    state.newIceStatus,
    state.setNewIceStatus,
  ]);

  const handleFlavourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIceFlavour(e.target.value);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIceAmount(+e.target.value);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewIceStatus(e.target.value as IceStatus);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!newIceFlavour || !newIceAmount) return;
    addIce(newIceFlavour, newIceStatus, newIceAmount);
  };
  return (
    <div className="text-center p-2 m-3 text-lg  bg-amber-600 text-gray-100">
      INPUT FLAVOUR TO DATABASE:
      <form action="" className="flex justify-center space-x-5 items-center">
        <input
          type="text"
          className="border"
          placeholder="Enter flavour name..."
          value={newIceFlavour}
          onChange={handleFlavourChange}
        />
        <input
          type="number"
          className="border"
          placeholder="Enter ice cream amount..."
          value={newIceAmount}
          onChange={handleAmountChange}
        />
        kg
        <select name="status" id="id" onChange={handleSelect}>
          <option value="choose-status">---Choose Status---</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of stock</option>
          <option value="on-the-way">On the way</option>
        </select>
        <button
          type="button"
          className="bg-amber-700 text-gray-100 rounded-full py-2 px-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FlavourInput;