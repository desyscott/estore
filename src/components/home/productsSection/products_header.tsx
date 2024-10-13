import React from "react";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

export default function ProductsHeader({}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-3xl md:text-5xl text-nowrap">Latest Products</h3>
        <p className="text-sm text-slate-500 w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat
          blanditiis est iusto recusandae, quia tempore quos delectus quod..
        </p>
      </div>

      <Button
        variant={"outline"}
        className={cn(
          "rounded-full h-8 flex items-center gap-2 text-slate-500 text-sm"
        )}
      >
        View all
        <MoveRight className="h-4 w-4 text-slate-500" />
      </Button>
    </div>
  );
}
