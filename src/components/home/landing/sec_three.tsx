import { Button } from "@/components/ui/button";
import { Archive, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SecThree({}: Props) {
  return (
    <div>
      <div className="flex items-start gap-1">
        <Image
          src="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="banner"
          width={2000}
          height={1000}
          className="rounded-lg h-16 w-16 object-cover"
        />
        <Button
          variant="outline"
          className="rounded-full h-6 bg-slate-100 text-xs border-none"
        >
          New
        </Button>
      </div>

      <p className="text-xs mt-4 md:w-1/2 lg:w-2/3 md:text-base text-slate-700">
        The Sportiest Hermes strap yet - made from water proof moulded rubber
        with a deployment buckle.
      </p>

      <p>Read more</p>

      <div className="flex items-center gap-1 my-12">
        <p className="text-sm text-slate-600 underline underline-offset-4 decoration-slate-400">
          Read more
        </p>
        <div className="rounded-full flex items-center justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground bg-slate-100 p-[2px]">
          <ArrowUpRight className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <div className="lg:mt-32">
        <div className="flex items-center justify-between border-b">
          <p className="text-slate-600 text-sm">Material</p>
          <p className="text-slate-400 text-sm">Fluoroelastomer</p>
        </div>
        <div className="flex items-center justify-between border-b mt-2">
          <p className="text-slate-600 text-sm">Weight</p>
          <p className="text-slate-400 text-sm">32h</p>
        </div>
        <div className="flex items-center justify-between border-b mt-2">
          <p className="text-slate-600 text-sm">Size</p>
          <p className="text-slate-400 text-sm">140mm</p>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:mt-24">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-slate-100 border-none h-12 w-12 text-slate-700 text-sm"
        >
          <Archive className="h-5 w-5 text-slate-500" />
        </Button>
        <div>
          <p className="text-slate-600 text-sm font-medium">
            One Size (Fits Most)
          </p>
          <p className="text-slate-400 text-xs">Strap fits 140-175mm wrist</p>
        </div>
      </div>
    </div>
  );
}
