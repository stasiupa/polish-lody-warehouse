"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useIceStore } from "@/store/IceStore";
import FlavourStock from "../components/FlavourStock";
import FlavourInput from "../components/FlavourInput";

function StockManager() {
  const [ice, getIce] = useIceStore((state) => [state.ice, state.getIce]);

  useEffect(() => {
    getIce();
  }, [getIce]);
  console.log(ice);
  return (
    <div>
      <Navbar />
      <FlavourInput />
      {Array.from(ice.iceCreams.entries()).map(([id, iceCream], index) => (
        <FlavourStock
          key={id}
          id={id}
          iceCreams={iceCream.iceCreams}
          index={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default StockManager;
