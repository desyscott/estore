import { Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span className="sr-only">esstore</span>
    </Link>
  );
}
