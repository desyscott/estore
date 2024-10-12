import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Header from "./header";
import Image from "next/image";
import Pill from "./pill";
import Collections from "./collections";

type Props = {};

export default function CollectionsSection({}: Props) {
  return (
    <div className="my-10 w-full max-w-[95%] mx-auto">
      <Header />

      <div className="my-10">
        <Collections />
      </div>

      <div className="h-20 mt-10">
        <p>something here</p>
      </div>
    </div>
  );
}
