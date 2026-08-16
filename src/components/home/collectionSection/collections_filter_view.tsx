"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Pill from "./pill";
import Info from "./info";

type Props = {
  collections: CollectionType[];
};

export default function CollectionsFilterView({ collections }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredCollections =
    activeFilter === "All"
      ? collections
      : collections.filter((collection) => collection.title === activeFilter);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl text-nowrap">
            Latest Collections
          </h3>
          <p className="text-sm text-slate-500 w-2/3">
            Browse our curated collections, from gaming gear to smart home
            essentials.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap my-4 lg:m-0 lg:justify-end">
          <Button
            variant={activeFilter === "All" ? "default" : "outline"}
            className="rounded-full h-8"
            onClick={() => setActiveFilter("All")}
          >
            All
          </Button>
          {collections.map((collection) => (
            <Button
              key={collection._id}
              variant={activeFilter === collection.title ? "default" : "outline"}
              className="rounded-full h-8"
              onClick={() => setActiveFilter(collection.title)}
            >
              {collection.title}
            </Button>
          ))}
        </div>
      </div>

      <div className="my-10">
        {filteredCollections.length === 0 ? (
          <p className="text-body-bold">No collections found</p>
        ) : (
          <div className="fluid-grid">
            {filteredCollections.map((collection) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
                className="group relative overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="cursor-pointer w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Pill className="absolute top-2 right-3 " />
                <Info
                  className="absolute bottom-2 w-[90%] left-0 right-0 mx-auto"
                  collection={collection}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
