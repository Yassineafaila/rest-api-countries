import React from "react";
import "./globals.css";
const Loading = () => {
  return (
    <main className="flex items-center justify-center gap-8 bg-light-background min-h-screen dark:bg-dark-background px-4">
      <p className="text-light-text font-semibold text-xl dark:text-dark-text">
        loading ...{" "}
      </p>
    </main>
  );
};
export default Loading;
