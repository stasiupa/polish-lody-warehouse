"use client";

import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlavourInput from "@/app/components/FlavourInput";
// import { useAtom } from "jotai";
// import { amountAtom, flavourAtom, flavourItemsAtom } from "@/store";

function AddNewProduct() {
  /// use State

  return (
    <div>
      <Navbar />
      <FlavourInput />
      <Footer />
    </div>
  );
}

export default AddNewProduct;
