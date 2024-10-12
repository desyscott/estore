import React from "react";
import Searchbar from "./home/searchbar";
import Navlinks from "./home/navlinks";
import MobileNav from "./home/mobile_nav";
import UserBtn from "./home/user_btn";
import CartButton from "./home/cart_btn";

type Props = {};

export default function Nav_Bar({}: Props) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Navlinks />

      <MobileNav />

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Searchbar />

        <CartButton />
        <UserBtn />
      </div>
    </header>
  );
}
