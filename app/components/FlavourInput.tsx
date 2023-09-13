"use client";

import React, { useState } from "react";

import FlavourItem from "@/app/components/FlavourStock";
import { useIceStore } from "@/store/IceStore";

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!newIceFlavour || !newIceAmount) return;
    addIce(newIceFlavour, newIceAmount, newIceStatus);
  };
  return (
    <div>
      <form action="" className="flex justify-center space-x-5 items-center">
        <input
          type="text"
          className="border"
          placeholder="Enter flavour name..."
          value={newIceFlavour}
        />
        <input
          type="number"
          className="border"
          placeholder="Enter ice cream amount..."
          value={newIceAmount}
        />
        kg
        <select name="status" id="id">
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
