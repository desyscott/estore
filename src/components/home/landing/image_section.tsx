import React from "react";
import SecOne from "./sec_one";
import SecTwo from "./sec_two";
import SecThree from "./sec_three";

type Props = {};

export default function ImageSection({}: Props) {
  return (
    <div className="max-w-[95%] mx-auto px-4 pt-8 flex flex-col lg:flex-row bg-lime-00 lg:gap-8 lg:items-start">
      <div className="bg-red-00 lg:order-2 lg:w-[40%] mx-auto lg:h-[650px]">
        <SecOne />
      </div>

      <div className="mt-8 md:mt-0 bg-amber-00 lg:order-1  lg:w-[30%]">
        <SecTwo />
      </div>

      <div className="hidden md:block mt-8 md:mt-0 bg-cyan-00 lg:order-3  lg:w-[25%] ml-auto">
        <SecThree />
      </div>
    </div>
  );
}
