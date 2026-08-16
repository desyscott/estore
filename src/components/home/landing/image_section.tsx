import React from "react";
import SecOne from "./sec_one";
import SecTwo from "./sec_two";
import SecThree from "./sec_three";

type Props = {
  product?: ProductType;
};

export default function ImageSection({ product }: Props) {
  return (
    <div className="max-w-[95%] mx-auto px-4 pt-8 flex flex-col lg:flex-row bg-lime-00 lg:gap-8 lg:items-start">
      <div className="bg-red-00 lg:order-2 lg:w-[40%] mx-auto lg:h-[650px]">
        <SecOne />
      </div>

      <div className="mt-8 lg:mt-0 bg-amber-00 lg:order-1  lg:w-[30%]">
        <SecTwo product={product} />
      </div>

      <div className="mt-14 lg:mt-0 lg:order-3  w-full md:w-1/2 lg:w-[25%] ml-0 lg:ml-auto">
        <SecThree product={product} />
      </div>
    </div>
  );
}
