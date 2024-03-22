import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-5 shadow-md mb-2 bg-light-primary dark:bg-dark-primary">
      <nav className="container mx-auto max-w-[1380px] flex items-center justify-between">
        <h1 className="text-text font-black text-2xl">Where in the world</h1>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
