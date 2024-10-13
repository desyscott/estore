import React from "react";
import ProductsHeader from "./products_header";
import ProductsList from "./product_lists";
import ProductCard from "./product_card";

type Props = {};

export default function ProductsSection({}: Props) {
  return (
    <div className="my-14 w-full max-w-[95%] mx-auto">
      <ProductsHeader />

      <div className="my-10">
        {/* <ProductCard /> */}
        <ProductsList />
      </div>
    </div>
  );
}
