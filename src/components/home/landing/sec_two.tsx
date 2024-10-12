import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function SecTwo({}: Props) {
  const images = [
    "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/13991170/pexels-photo-13991170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <>
      <h2 className="text-2xl font-normal md:w-2/3 md:text-4xl">
        Hermès Kilim Single Tour
      </h2>
      <p className="text-xs mt-4 md:w-1/2 lg:w-2/3 md:text-base text-slate-700">
        The Sportiest Hermes strap yet - made from water proof moulded rubber
        with a deployment buckle.
      </p>

      <div className="flex items-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-slate-100 border-none h-8 w-8 text-slate-700 text-sm"
        >
          M
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-slate-100 border-none h-8 w-8 text-slate-700 text-sm"
        >
          L
        </Button>
        <Button className="rounded-3xl h-8 w-1/2 md:w-1/4 text-xs">
          Buy $299.00
        </Button>
      </div>

      <div className="bg-indigo-00 mt-16">
        <div className="flex items-center gap-1 mt-4 mb-2">
          <p className="text-sm text-slate-600 underline underline-offset-4 decoration-slate-400">
            Next-level Adventure
          </p>
          <div className="rounded-full flex items-center justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground bg-slate-100 p-[2px]">
            <ArrowUpRight className="h-4 w-4 text-slate-500" />
          </div>
        </div>

        <Image
          src="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="banner"
          width={2000}
          height={1000}
          className="rounded-lg h-44 w-3/4 object-cover"
        />
        <div className="flex items-center justify-start gap-2 mt-4">
          {images.map((item) => (
            <Image
              key={item}
              src={item}
              alt="banner"
              width={2000}
              height={1000}
              className="rounded-lg h-14 w-14 object-cover"
            />
          ))}
        </div>
      </div>
    </>
  );
}
