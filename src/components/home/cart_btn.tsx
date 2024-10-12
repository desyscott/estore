"use client";

import useCart from "@/lib/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

type Props = {};

export default function CartButton({}: Props) {
  const cart = useCart();

  return (
    <Button asChild size="icon" className="h-8 w-8 rounded-full relative">
      <Link href="/cart">
        <ShoppingCart className="h-4 w-4" />
        {cart.cartItems.length > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 border-none text-white rounded-full text-xs items-center justify-center h-5 w-5"
          >
            {cart.cartItems.length}
          </Badge>
        )}
      </Link>
    </Button>
  );
}
