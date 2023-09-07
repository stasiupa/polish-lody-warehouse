import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-center space-x-5">
      <Link
        href="/stock"
        className="bg-amber-700 text-gray-100 rounded-full py-2 px-2"
      >
        Warehouse Stock Status
      </Link>

      <Link href="/">
        <Image
          src="/polish_logo.png"
          alt="polish lody logo"
          width={100}
          height={100}
        />
      </Link>
      <Link
        href="input"
        className="bg-amber-700 text-gray-100 rounded-full py-2 px-2"
      >
        Add New Product
      </Link>
    </div>
  );
}

export default Navbar;
