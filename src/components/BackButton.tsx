"use client";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
function BackButton() {
  return (
    <button type="button" className="my-5">
      <FaArrowLeftLong />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
