import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="w-full px-4 py-5 bg-gray-200 dark:bg-dark-primary mt-4">
      <div className="container mx-auto max-w-[1380px] flex items-center justify-between">
        <p className="font-bold text-light-text dark:text-dark-text ">
          By Me :{" "}
          <Link href="https://github.com/Yassineafaila" className="underline">
            Github : Yassine Afaila
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
