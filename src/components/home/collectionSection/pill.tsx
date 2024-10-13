import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Layers3 } from "lucide-react";
import React from "react";

interface PillProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Pill({ className }: PillProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "rounded-full border-none h-8 bg-white/60 backdrop-filter backdrop-blur-lg text-xs text-slate-600 flex items-center justify-center gap-1",
        className
      )}
    >
      view
      <Layers3 className="h-4 w-4 text-slate-600" />
    </Button>
  );
}
