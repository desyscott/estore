import React from "react";
import TitleSection from "./landing/title_section";
import ImageSection from "./landing/image_section";
import { getProducts } from "@/lib/actions/actions";

type Props = {};

export default async function Landing({}: Props) {
  const products = await getProducts();
  const featuredProduct: ProductType | undefined = products?.[0];

  return (
    <div className="py-4">
      <TitleSection product={featuredProduct} />
      <ImageSection product={featuredProduct} />
    </div>
  );
}
