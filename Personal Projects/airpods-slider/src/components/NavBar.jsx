import React from "react";
import { NavbarData } from "../data/MockData";
import { MdMenu } from "react-icons/md";
import { FaApple, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="text-white py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-3xl font-semibold">
          <FaApple />
          AirPods Max
        </div>
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block text-base py-2 px-3 uppercase"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>
        {/* Hamburger Menu Section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
