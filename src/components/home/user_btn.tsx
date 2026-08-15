"use client";

import React from "react";
import { CircleUser, CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";

type Props = {};

export default function UserBtn({}: Props) {
  const { user } = useUser();
  const { openUserProfile, signOut } = useClerk();
  const router = useRouter();

  return (
    <>
      {!user ? (
        <Link href="/sign-in">
          <CircleUserRound className="h-7 w-7" />
        </Link>
      ) : (
        // <UserButton afterSignOutUrl="/sign-in" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => openUserProfile()}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="mailto:mrfallback055@gmail.com">Support</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut(() => router.push("/sign-in"))}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
