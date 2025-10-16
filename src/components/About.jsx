// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I’m <strong>Satwik Narwa</strong>, an AI/ML and Full-Stack Developer with hands-on
          experience in Python, Django, React, Go, and MongoDB. I build scalable web apps,
          integrate ML models, and create REST APIs that solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
