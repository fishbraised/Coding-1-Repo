import React from "react";
import { FaMoon, FaSun, FaDumbbell } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-neutral-900 dark:text-white shadow-sm">
      <div className="container flex items-center justify-between px-8 py-4">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-2xl" />
          <h1 className="text-xl font-bold">Fitness Pro</h1>
        </div>
        {/* Links section */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a
            href="/"
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Features
          </a>
          <a
            href="/"
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Pricing
          </a>
          <a
            href="/"
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Testimonials
          </a>
          <a
            href="/"
            className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
          >
            Testimonials
          </a>
        </nav>
        {/* Theme toggle section */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-neutral-600"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-lg cursor-pointer" />
          ) : (
            <FaMoon className="text-gray-800 text-lg cursor-pointer" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
