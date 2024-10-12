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
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <>
        <Logo />
      </>

      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;
        const href = user || link.href === "/" ? link.href : "sign-in";
        return (
          <Link
            key={link.href}
            href={href}
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground hover:text-red-500",
              isActive && "font-medium text-red-500"
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
