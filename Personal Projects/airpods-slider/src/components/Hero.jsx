import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HeadphoneData } from "../data/MockData";

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);

  return (
    <section className="bg-red-400 text-white">
      <NavBar />
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">
        {/* Headphone Info Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5">
            <h1>{activeData.title}</h1>
            <p>{activeData.subtitle}</p>
            <p>{activeData.price}</p>
          </div>
        </div>
        {/* Headphone Image Section */}
      </div>
    </section>
  );
};

export default Hero;
