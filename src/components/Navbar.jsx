// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-gray-900 bg-opacity-90 text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Satwik Narwa</div>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#footer" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>












  );
};

export default Navbar;
