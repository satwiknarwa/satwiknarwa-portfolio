// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "CoverGenie – AI-Powered Cover Letter Generator",
    description:
      "Full-stack web app that generates personalized cover letters from resumes and job descriptions using AI.",
    tech: "Django • React • Tailwind CSS • OpenAI API • REST API",
    github: "https://github.com/satwiknarwa/covergenie-frontend",
    demo: "https://covergenie-fe.vercel.app/", 
  },
  {
    name: "Real-Time Face Emotion Recognition",
    description:
      "CNN-based emotion classifier with real-time webcam feed integration and optimized deep learning inference.",
    tech: "Python • CNN • OpenCV • Pandas",
    github: "https://github.com/satwiknarwa/face-emotion-recognization",
  },
  {
    name: "Cinema –  Movie Discovery App",
    description:
      "Full-stack movie discovery platform with categorized browsing, favorites, and real-time search using the OMDb API.",
    tech: "React • Vite • Tailwind CSS • OMDb API • Vercel",
    github: "https://github.com/satwiknarwa/cinema",
    demo: "https://cinema-blush-delta.vercel.app/", 
  },
  {
    name: "AI VoiceBot – Full-Stack Smart Voice Assistant",
    description:
      "An AI-driven voice assistant with an interactive React frontend and Python backend, capable of understanding voice commands, generating AI-based responses, and performing tasks in real time.",
    tech: "React • Python • Flask • SpeechRecognition • pyttsx3 • OpenAI API",
    github: "https://github.com/satwiknarwa/AI-voicebot",
    demo: "https://ai-voicebot-kpqj.onrender.com/", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 tracking-wide">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl p-8 bg-opacity-10 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-lg shadow-lg border border-gray-700/40 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-3 text-sm">
                {project.description}
              </p>
              <p className="text-xs text-blue-400 mb-6">{project.tech}</p>

              <div className="flex justify-center gap-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2  hover:decoration-white transition px-4 py-2 rounded-full text-sm font-semibold"
                >
                  <FaGithub size={18} /> Code
                </a>

                {/* Live Demo Button */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-white transition px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
