import React from "react";
import { motion } from "framer-motion";
import profilephoto from "../assets/profilephoto.png";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
      
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-2 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10"
      >
        <img 
          src={profilephoto} 
          alt="Satwik Narwa"
          className="w-40 h-40 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Satwik Narwa
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl text-blue-300 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        AI/ML & Full-Stack Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-8 max-w-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Building intelligent applications and impactful solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          View Projects
        </a>

        <a
          href="#footer"
          className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition shadow-md"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
