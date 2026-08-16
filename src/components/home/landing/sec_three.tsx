import { Button } from "@/components/ui/button";
import { Archive, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product?: ProductType;
};

export default function SecThree({ product }: Props) {
  if (!product) {
    return null;
  }

  return (
    <div className="">
      <div className="">
        <div className="flex items-start gap-2">
          <Image
            src={product.media[0]}
            alt={product.title}
            width={2000}
            height={1000}
            className="rounded-lg h-16 w-16 object-cover"
          />
          <Button
            variant="outline"
            className="rounded-full h-6 bg-slate-100 text-xs border-none"
          >
            New
          </Button>
        </div>

        <p className="text-xs mt-4 md:w-1/2 lg:w-2/3 md:text-base text-slate-700 line-clamp-3">
          {product.description}
        </p>

        <Link
          href={`/products/${product._id}`}
          className="flex items-center gap-1 my-12 w-fit"
        >
          <p className="text-sm text-slate-600 underline underline-offset-4 decoration-slate-400">
            Read more
          </p>
          <div className="rounded-full flex items-center justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground bg-slate-100 p-[2px]">
            <ArrowUpRight className="h-4 w-4 text-slate-500" />
          </div>
        </Link>
      </div>

      <div className="lg:mt-32">
        <div className="flex items-center justify-between border-b">
          <p className="text-slate-600 text-sm">Category</p>
          <p className="text-slate-400 text-sm">{product.category}</p>
        </div>
        <div className="flex items-center justify-between border-b mt-2">
          <p className="text-slate-600 text-sm">Price</p>
          <p className="text-slate-400 text-sm">${product.price}</p>
        </div>
        <div className="flex items-center justify-between border-b mt-2">
          <p className="text-slate-600 text-sm">Sizes</p>
          <p className="text-slate-400 text-sm">{product.sizes.join(", ")}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8 lg:mt-24">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-slate-100 border-none h-12 w-12 text-slate-700 text-sm"
        >
          <Archive className="h-5 w-5 text-slate-500" />
        </Button>
        <div>
          <p className="text-slate-600 text-sm font-medium">
            {product.colors.length} color
            {product.colors.length === 1 ? "" : "s"} available
          </p>
          <p className="text-slate-400 text-xs">{product.colors.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
