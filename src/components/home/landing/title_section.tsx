import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import React from "react";

type Props = {};

export default function TitleSection({}: Props) {
  return (
    <div className="flex flex-col xl:flex-row w-full max-w-[95%] mx-auto xl:items-center">
      <div className="relative w-full xl:w-4/6 p-4 md:p-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-medium lg:text-nowrap">
          Apple Hermes
        </h1>
        <div className="h-8 w-8 absolute top-12 right-[12%] translate-x-[12%] rounded-full flex items-center justify-center border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
          <Apple className="h-4 w-4" />
        </div>
      </div>

      <div className="w-full xl:w-2/6 flex flex-col items-start xl:items-end  p-4 md:p-8 gap-4">
        <p className="text-xs text-left xl:text-right w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/5">
          Apple Watch Altra 2. Uniquely tailored for the demanding needs of all
          workout types
        </p>
        <Button className="rounded-3xl h-8">Read more</Button>
      </div>
    </div>
  );
}
