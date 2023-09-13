import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center py-5 pb-5  items-center justify-center">
        Welcome to Polish Lody Warehouse!
        <Image
          width={400}
          height={400}
          src="/lodymagazynjpg.jpg"
          alt="magazyn"
          className=" mx-auto py-5"
        />
      </div>
      <Footer />
    </div>
  );
}
