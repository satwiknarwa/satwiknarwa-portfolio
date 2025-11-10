import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Download } from "lucide-react";

const Footer = () => {
  const resumeLink = "/certifications/resume.pdf"; // Link to your resume PDF
  return (
    <section id="footer"className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black text-white text-center px-6 ">
      {/* Quote */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-mono text-gray-300 mb-8"
      >
        "Learning, Living, and Leveling Up."
      </motion.h2>

      {/* Get in Touch */}
      <motion.a
        href="#contact"
        className="text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8 hover:underline"
        whileHover={{ scale: 1.1 }}
      >
        GetInTouch
      </motion.a>

      {/* Social Links */}
      <div className="flex gap-8 mb-8">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-gray-500 hover:border-purple-400 hover:text-purple-400 transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://linkedin.com/in/narwa-satwik"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/satwiknarwa"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-gray-500 hover:border-gray-300 hover:text-gray-300 transition"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:satwiknarwa@gmail.com"
          className="p-3 rounded-full border border-gray-500 hover:border-pink-400 hover:text-pink-400 transition"
        >
          <Mail size={24} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 font-mono text-sm">
        © 2025 Satwiknarwa. All rights reserved.
      </p>

      {/* Floating Resume Button */}
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        title="View Resume"
      >
        <Download size={24} />
      </a>
    </section>
  );
};

export default Footer;
