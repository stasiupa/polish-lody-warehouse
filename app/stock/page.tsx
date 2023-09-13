"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useIceStore } from "@/store/IceStore";

function StockManager() {
  const [ice, getIce] = useIceStore((state) => [state.ice, state.getIce]);

  useEffect(() => {
    getIce();
  }, [getIce]);
  console.log(ice);
  return (
    <div>
      <Navbar />
      <div className="flex flex-1">{Array.from(board.iceCreams.entries())}</div>
      <Footer />
    </div>
  );
}

export default StockManager;
