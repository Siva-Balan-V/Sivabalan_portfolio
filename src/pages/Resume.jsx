import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Resume = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen px-6 py-10 transition-colors duration-500 flex items-center justify-center ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-sky-100 to-white text-gray-800'
      }`}
    >
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">My Resume</h2>
        <p className="mb-6 text-lg">
          Here is my  resume containing my skills, projects, and achievements.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
