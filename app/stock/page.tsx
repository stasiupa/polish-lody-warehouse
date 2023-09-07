"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAtom } from "jotai";
import { flavourAtom } from "@/store";

import { getFlavours } from "@/lib/getFlavours";

function StockManager() {
  getFlavours();
  return (
    <div>
      <Navbar />
      <div className="flex flex-1"></div>
      <Footer />
    </div>
  );
}

export default StockManager;
