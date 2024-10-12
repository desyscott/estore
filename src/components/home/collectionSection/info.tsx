import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import React from "react";

interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {
  collection: CollectionType;
}

export default function Info({ collection, className }: InfoProps) {
  return (
    <div
      //   className={cn("", className)}
      className={cn(
        "rounded-full h-8 bg-white/50 backdrop-filter backdrop-blur-lg text-sm w-full flex items-center justify-center gap-2 text-slate-600",
        className
      )}
    >
      {collection.title}
      <ShoppingBag className="h-4 w-4 text-slate-600" />
    </div>
  );
}
