"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type Props = {};

export default function Searchbar({}: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // router.push(`/search?query=${query}`);
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={search} className="ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
