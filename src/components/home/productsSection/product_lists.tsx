import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";
import React from "react";

type Props = {};

export default async function ProductsList({}: Props) {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return <p className="text-body-bold">Sorry no product to display</p>;
  }

  return (
    <div className="fluid-grid">
      {products.map((product: ProductType) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
