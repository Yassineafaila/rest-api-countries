"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("search");
  const [search, setSearch] = useState<string>(query || "");
  useEffect(() => {
    if (search) {
      router.push(`/?search=${search}`);
    } else {
      router.push("/");
    }
  }, [search, router]);
  return (
    <div className="bg-light-primary rounded shadow-md w-[50%] my-10 flex items-center gap-2 dark:bg-dark-primary py-5 px-4">
      <IoSearch className="text-light-text dark:text-dark-text text-xl" />
      <input
        type="text"
        placeholder="Search for a country ..."
        value={search}
        className="outline-none text-light-input bg-transparent"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
