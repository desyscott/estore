import React from "react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-black p-8">
      <div className="flex flex-wrap md:flex-nowrap text-white/70 gap-12 md:gap-2 pt-8">
        <div className="w-[50%] flex flex-col gap-2">
          <p className="text-lg md:text-xl font-semibold w-full md:w-[70%] lg:w-[50%]">
            ESSTORE
          </p>
          <p className="text-sm mt-2 max-w-sm">
            Your destination for the latest tech, gadgets, and smart home
            essentials. Curated picks across audio, gaming, computing, and
            everyday accessories, delivered right to your door.
          </p>
        </div>
        <div className="w-[40%] md:w-[15%] ml-0 md:ml-auto">
          <p className="text-lg font-medium mb-4">Shop</p>
          <Link href="/" className="block text-base mb-1 hover:text-white">
            Home
          </Link>
          <Link
            href="/products"
            className="block text-base mb-1 hover:text-white"
          >
            All Products
          </Link>
          <Link
            href="/collections"
            className="block text-base mb-1 hover:text-white"
          >
            All Collections
          </Link>
          <Link
            href="/cart"
            className="block text-base mb-1 hover:text-white"
          >
            Cart
          </Link>
          <Link
            href="/wishlist"
            className="block text-base mb-1 hover:text-white"
          >
            Wishlist
          </Link>
        </div>
        <div className="w-[40%] md:w-[15%] ml-0 md:ml-auto">
          <p className="text-lg font-medium mb-4">Support</p>
          <Link
            href="/orders"
            className="block text-base mb-1 hover:text-white"
          >
            My Orders
          </Link>
          <Link
            href="mailto:mrfallback055@gmail.com"
            className="block text-base mb-1 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="h-[0.5px] w-full bg-white/50 my-8"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 pt-8 pb-4 text-white/80 p-8">
        <div className="flex items-center gap-2">
          <Link href="mailto:mrfallback055@gmail.com" target="_blank">
            <EnvelopeClosedIcon className="w-5 h-5" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} ESSTORE. All rights reserved.</p>
      </div>
    </div>
  );
}
