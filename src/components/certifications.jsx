import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import intelLogo from "../assets/intel.png";
import udemyLogo from "../assets/udemy.svg"; 
import Certifications from "./components/Certifications";
// ✅ now uses local Udemy SVG

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    icon: "oracle",
    file: "/certifications/Oracle_Ai_foundations.pdf",
  },
  {
    name: "Microsoft Certified: Data Analyst Associate with Power BI",
    issuer: "Udemy",
    icon: "udemy",
    file: "/certifications/power_bi_course_certificate.pdf",
  },
  {
    name: "Python: Learning Python",
    issuer: "LinkedIn Learning",
    icon: "python",
    file: "/certifications/Python.jpg",
  },
  {
    name: "Intel® Unnati AI Course Workshop",
    issuer: "Intel® Unnati Lab",
    icon: "intel",
    file: "/certifications/interl_unati_certificate.pdf",
  },
];

const Certifications = () => (
  <section
    id="certifications"
    className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
  >
    <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10 text-blue-400">Certifications</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="cert-card bg-gray-800 bg-opacity-70 border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            {/* 🧠 Conditional Icon Rendering */}
            {cert.icon === "intel" ? (
              <img
                src={intelLogo}
                alt={cert.issuer}
                className="w-14 h-14 mb-4 rounded-full shadow-lg"
              />
            ) : cert.icon === "udemy" ? (
              <img
                src={udemyLogo}
                alt={cert.issuer}
                className="w-14 h-14 mb-4 rounded-full shadow-lg"
              />
            ) : (
              <img
                src={`/icons/${cert.icon}.svg`}
                onError={(e) => {
                  e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${cert.icon}/${cert.icon}-original.svg`;
                }}
                alt={cert.issuer}
                className="w-14 h-14 mb-4"
              />
            )}

            <h3 className="text-lg font-semibold mb-2 text-blue-400">{cert.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

            <div className="flex items-center text-blue-400 gap-1">
              <ExternalLink size={16} />
              <span className="text-sm">View Certificate</span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Certifications;
