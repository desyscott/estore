import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const options = [
    {
      id: 1,
      name: "Collection",
    },
    {
      id: 2,
      name: "Case size",
    },
    {
      id: 3,
      name: "Band Color",
    },
    {
      id: 4,
      name: "Band Type",
    },
    {
      id: 5,
      name: "Explore Variants",
      active: true,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
      <div>
        <h3 className="text-3xl md:text-5xl text-nowrap">Latest Collections</h3>
        <p className="text-sm text-slate-500 w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat
          blanditiis est iusto recusandae, quia tempore quos delectus quod..
        </p>
      </div>
      <div className="flex items-center  gap-2 flex-wrap my-4 lg:m-0 lg:justify-end">
        {options.map((option, idx) => (
          <Button
            key={option.id}
            variant={option.active ? "default" : "outline"}
            className={cn("rounded-full h-8", idx < 2 && "lg:hidden xl:flex ")}
          >
            {option.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
