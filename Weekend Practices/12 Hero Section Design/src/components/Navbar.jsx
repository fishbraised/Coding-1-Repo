import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 -mb-11 flex items-center justify-between bg-black px-10 py-6">
      <a href="/" className="text-xl font-semibold text-white">
        mnmlst.
      </a>

      <ul className="flex gap-x-8 text-sm font-semibold tracking-wide text-[#bdbbbbff]">
        <li>
          <a
            className="transition-colors duration-300 hover:text-[#9f9f9fd0]"
            href="/"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="transition-colors duration-300 hover:text-[#9f9f9fd0]"
            href="/"
          >
            PRODUCT
          </a>
        </li>
        <li>
          <a
            className="transition-colors duration-300 hover:text-[#9f9f9fd0]"
            href="/"
          >
            STORE
          </a>
        </li>
        <li>
          <a
            className="transition-colors duration-300 hover:text-[#9f9f9fd0]"
            href="/"
          >
            ABOUT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
