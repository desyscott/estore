"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

type Props = {};

export default function Searchbar({}: Props) {
  const router = useRouter();
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    router.push(`/search/${encodeURIComponent(trimmedQuery)}`);
  };

  const closeSearch = () => {
    setOnSearch(false);
    setQuery("");
  };

  return (
    <>
      {!onSearch ? (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setOnSearch(true)}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-200 border-none"
        >
          <Search className="h-4 w-4 text-slate-500" />
        </Button>
      ) : (
        <form onSubmit={search} className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Close search"
              className="absolute left-2.5 top-2 cursor-pointer"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
            <Input
              type="search"
              placeholder="Search products..."
              className="h-8 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] shadow-none [&::-webkit-search-cancel-button]:cursor-pointer"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </form>
      )}
    </>
  );
}
