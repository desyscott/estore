import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pill from "./pill";
import Info from "./info";

type CollectionsProps = {};

export default async function Collections({}: CollectionsProps) {
  const collections = await getCollections();

  if (!collections || collections.length === 0) {
    return <p className="text-body-bold">No collections found</p>;
  }

  return (
    <div className="fluid-grid">
      {collections.map((collection: CollectionType) => (
        <Link
          href={`/collections/${collection._id}`}
          key={collection._id}
          className="relative"
        >
          <Image
            src={collection.image}
            alt={collection.title}
            width={350}
            height={200}
            className="rounded-lg cursor-pointer w-full h-full object-cover"
          />
          <Pill className="absolute top-2 right-3 " />
          <Info
            className="absolute bottom-2 w-[90%] left-0 right-0 mx-auto"
            collection={collection}
          />
        </Link>
      ))}
    </div>
  );
}
