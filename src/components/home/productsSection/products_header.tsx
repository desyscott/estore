import React from "react";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

export default function ProductsHeader({}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-3xl md:text-5xl text-nowrap">Latest Products</h3>
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
