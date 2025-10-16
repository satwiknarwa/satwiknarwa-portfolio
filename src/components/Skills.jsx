// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Django", icon: "django" },
  { name: "React", icon: "react" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "Flask", icon: "flask" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "OpenCV", icon: "opencv" },
  { name: "Postman", icon: "postman" },
  { name: "GitHub", icon: "github" },
  { name: "MySQL", icon: "mysql" },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
    <motion.div
      className="max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-blue-400">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 place-items-center">
        {skills.map((skill, i) => (
          <motion.div
          key={i}
          className="skill-icon flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          >

            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              className="w-14 h-14"
            />
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
