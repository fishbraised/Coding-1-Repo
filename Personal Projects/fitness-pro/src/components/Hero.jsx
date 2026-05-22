import React from "react";
import heroImage from "../assets/fitness.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-neutral-800">
      <div className="max-w-6xl w-full mx-auto px-14 pt-14 lg:pt-0 flex flex-col lg:flex-row justify-between items-center">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase font-semibold tracking-wide text-neutral-500 dark:text-neutral-400"
          >
            Work Smarter. Achieve More
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-tight mt-4 text-neutral-700 dark:text-neutral-100"
          >
            Simple fitness experience for everyone.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-600 dark:text-gray-300 text-sm"
          >
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <button className="text-white px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-500 cursor-pointer">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-900 cursor-pointer">
              View Pricing
            </button>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 w-full flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero image."
            className="w-[500px] lg:translate-x-32 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
