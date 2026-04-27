import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    let split = SplitText.create(".animated-text__split-rise", {
      type: "chars",
    });

    gsap.from(split.chars, {
      duration: 0.4,
      x: 100,
      y: 100,
      rotateZ: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-between p-10">
        <div>
          <p className="mb-3 text-sm text-[#bdbbbbff]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Ad voluptas temporibus quia excepturi?
          </p>
          <button className="cursor-pointer text-sm font-semibold text-white underline">
            Read More
          </button>
        </div>

        <p className="animated-text__split-rise z-10 mr-10 text-9xl font-extrabold text-white">
          less is
          <br />
          more.
        </p>

        {/* The tags below are centered with position: absolute. */}

        <div className="absolute top-[50%] left-[50%] size-115 translate-x-[-50%] translate-y-[-50%] rounded-full bg-yellow-500"></div>
        <img
          className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]"
          src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1774019021/Backgrounds/hero-section-man.png"
          alt="Hero section man."
        />
      </section>
    </>
  );
};

export default Hero;
