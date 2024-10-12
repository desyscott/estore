import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface PillProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Pill({ className }: PillProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "rounded-full border-none h-8 bg-white/60 backdrop-filter backdrop-blur-lg text-xs text-slate-600",
        className
      )}
    >
      Explore
    </Button>
  );
}
