"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/lib/hooks/useCart";

type Props = {
  product?: ProductType;
};

export default function SecTwo({ product }: Props) {
  const cart = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );

  if (!product) {
    return null;
  }

  const thumbnails = product.media.slice(1, 4);

  return (
    <>
      <Link href={`/products/${product._id}`}>
        <h2 className="text-2xl font-normal md:w-2/3 md:text-4xl hover:underline">
          {product.title}
        </h2>
      </Link>
      <p className="text-xs mt-4 md:w-1/2 lg:w-2/3 md:text-base text-slate-700 line-clamp-3">
        {product.description}
      </p>

      <div className="flex items-center gap-2 mt-6">
        {product.sizes.slice(0, 2).map((size) => (
          <Button
            key={size}
            variant="outline"
            className={cn(
              "rounded-full bg-slate-100 border-none h-8 w-auto px-3 whitespace-nowrap text-slate-700 text-xs",
              selectedSize === size && "bg-black text-white hover:bg-black"
            )}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
        <Button
          className="rounded-3xl h-8 w-1/2 md:w-1/4 text-xs"
          onClick={() =>
            cart.addItem({
              item: product,
              quantity: 1,
              size: selectedSize,
              color: product.colors?.[0],
            })
          }
        >
          Buy ${product.price}
        </Button>
      </div>

      <div className="bg-indigo-00 mt-16">
        <Link
          href={`/products/${product._id}`}
          className="flex items-center gap-1 mt-4 mb-4 w-fit"
        >
          <p className="text-sm text-slate-600 underline underline-offset-4 decoration-slate-400">
            View product
          </p>
          <div className="rounded-full flex items-center justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground bg-slate-100 p-[2px]">
            <ArrowUpRight className="h-4 w-4 text-slate-500" />
          </div>
        </Link>

        <Image
          src={product.media[0]}
          alt={product.title}
          width={2000}
          height={1000}
          className="rounded-lg h-44 w-3/4 object-cover"
        />
        {thumbnails.length > 0 && (
          <div className="flex items-center justify-start gap-2 mt-4">
            {thumbnails.map((image) => (
              <Image
                key={image}
                src={image}
                alt={product.title}
                width={2000}
                height={1000}
                className="rounded-lg h-14 w-14 object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
