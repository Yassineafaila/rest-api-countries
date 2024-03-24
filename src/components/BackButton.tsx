"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button
      type="button"
      className="w-fit my-5 flex items-center gap-3 bg-light-primary shadow-lg rounded dark:bg-dark-primary text-light-text dark:text-dark-text px-5 py-2"
      onClick={handleClick}
    >
      <FaArrowLeftLong />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
