import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  product?: ProductType;
};

export default function TitleSection({ product }: Props) {
  return (
    <div className="flex flex-col xl:flex-row w-full max-w-[95%] mx-auto xl:items-center">
      <div className="relative w-full xl:w-4/6 p-4 md:p-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-medium lg:text-nowrap">
          {product ? product.title : "New Arrivals"}
        </h1>
        <div className="h-8 w-8 absolute top-12 right-[12%] translate-x-[12%] rounded-full flex items-center justify-center border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
          <Sparkles className="h-4 w-4" />
        </div>
      </div>

      <div className="w-full xl:w-2/6 flex flex-col items-start xl:items-end  p-4 md:p-8 gap-4">
        <p className="text-xs text-left xl:text-right w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/5">
          {product
            ? product.description
            : "Explore our latest picks across tech and gadgets."}
        </p>
        <Link href={product ? `/products/${product._id}` : "/products"}>
          <Button className="rounded-3xl h-8">Read more</Button>
        </Link>
      </div>
    </div>
  );
}
