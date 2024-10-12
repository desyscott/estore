"use client";

import useCart from "@/lib/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

export default function CartButton({}: Props) {
  const cart = useCart();

  return (
    <Button asChild>
      <Link href="/cart" className="flex items-center gap-3">
        <ShoppingCart className="h-5 w-5" />
        <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
      </Link>
    </Button>
  );
}
