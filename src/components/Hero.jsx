// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Satwik Narwa
      </motion.h1>

      <motion.h2
        className="text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        AI/ML & Full-Stack Developer
      </motion.h2>

      <motion.p
        className="mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Building intelligent applications and impactful solutions.
      </motion.p>

      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="#footer"
          className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
