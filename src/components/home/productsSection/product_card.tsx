// import { Star } from "lucide-react";
import HeartFavorite from "@/components/HeartFavorite";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import React from "react";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

export default function ProductCard({
  product,
  updateSignedInUser,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-full flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] w-full rounded-lg object-cover"
      />

      <div className="p-2">
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <p className="text-body-bold">${product.price}</p>
        <HeartFavorite
          product={product}
          updateSignedInUser={updateSignedInUser}
        />
      </div>
    </Link>
  );
}
