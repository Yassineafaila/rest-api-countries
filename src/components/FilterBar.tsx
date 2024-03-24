"use client";
import { region } from "@/constants/constant";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("filterBy");
  const [isOpen, setOpen] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<string>(query || "");
  useEffect(() => {
    if (filterBy === "All") {
      return router.push("/");
    } else if (filterBy) {
      router.push(`/?region=${filterBy}`);
    } else {
      router.push("/");
    }
  }, [filterBy, router]);
  return (
    <div className="px-4 py-5 bg-light-secondary dark:bg-dark-primary shadow-md rounded relative">
      <div className="b h-full">
        <button
          className="flex items-center justify-between h-full gap-5 text-light-text dark:text-dark-text font-semibold"
          onClick={() => setOpen(!isOpen)}
        >
          {filterBy ? (
            <span>You Filtered By : {filterBy}</span>
          ) : (
            <span>Filter By Region </span>
          )}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, ease: "easeIn", duration: 0.5 }}
          className="absolute top-20 rounded  py-5 left-0 bg-light-primary dark:bg-dark-primary w-full z-50"
        >
          <li
            className="text-dark-primary dark:text-light-primary font-medium mt-2 text-base  cursor-pointer  hover:bg-gray-300 w-full px-4 duration-300 ease-in-out delay-100"
            key={1 * 2}
            onClick={() => setFilterBy("All")}
          >
            All
          </li>

          {region.map((r: string, index: number) => (
            <li
              className="text-dark-primary dark:text-light-primary font-medium mt-2 text-base  cursor-pointer  hover:bg-gray-300 w-full px-4 duration-300 ease-in-out delay-100"
              key={index}
              onClick={() => setFilterBy(r)}
            >
              {r}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default FilterBar;
