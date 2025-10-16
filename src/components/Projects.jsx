// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "CoverGenie – AI-Powered Cover Letter Generator",
    description:
      "Full-stack web app that generates custom cover letters from resumes and job descriptions using AI.",
    tech: "Django • React • Tailwind CSS • OpenAI API • REST API",
    image: "/images/projects/covergenie.png",
    github: "https://github.com/satwiknarwa/covergenie-frontend",
  },
  {
    name: "Real-Time Face Emotion Recognition",
    description:
      "CNN-based emotion classifier with live webcam feed integration and optimized real-time inference.",
    tech: "Python • CNN • OpenCV • Pandas",
    image: "/images/projects/face-emotion.png",
    github: "https://github.com/satwiknarwa/face-emotion-recognization",
  },
  {
    name: "Student Management REST API",
    description:
      "Flask + MongoDB CRUD API with data validation, error handling, and Postman-tested endpoints.",
    tech: "Flask • MongoDB • PyMongo • Postman",
    image: "/images/projects/student-api.png",
    github: "https://github.com/satwiknarwa/student-management-api",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#232b36] rounded-2xl p-8 flex flex-col h-full"
            >
              {/* Remove the image here */}
              <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-blue-400 mb-4">{project.tech}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
