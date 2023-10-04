"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IceStatus, useIceStore } from "@/store/IceStore";
import FlavourStock from "../components/FlavourStock";
import FlavourInput from "../components/FlavourInput";

function StockManager() {
  const [ice, getIce] = useIceStore((state) => [state.ice, state.getIce]);

  useEffect(() => {
    getIce();
  }, [getIce]);

  return (
    <div>
      <Navbar />
      <FlavourInput />
      {Object.keys(ice).map((id) => (
        <FlavourStock
          id={id as IceStatus}
          iceCreams={ice[id as IceStatus]}
          index={+id}
          key={id}
        />
      ))}
      <Footer />
    </div>
  );
}

export default StockManager;