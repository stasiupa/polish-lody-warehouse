'use client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlavourStock from "./components/FlavourStock";
import { IceStatus, useIceStore } from "@/store/IceStore";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FlavourInput from "./components/FlavourInput";

export default function Home() {
  const [ice, getIce] = useIceStore((state) => [state.ice, state.getIce]);

  useEffect(() => {
    getIce();
  }, [getIce]);

  return (
    <div>
      <Navbar />
      <SearchBar />
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
