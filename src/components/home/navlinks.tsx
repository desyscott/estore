"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/constants/nav_links";
import Logo from "./logo";

type Props = {};

export default function Navlinks({}: Props) {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <nav className="hidden md:flex gap-6 md:flex-row md:items-center md:gap-5 lg:gap-6 bg-red-500">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;
        const href = user || link.href === "/" ? link.href : "sign-in";
        return (
          <Link
            key={link.href}
            href={href}
            className={cn(
              "text-sm font-meium text-muted-foreground transition-colors hover:text-red-500",
              isActive && " text-red-500"
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
