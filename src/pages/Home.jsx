import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`relative min-h-screen flex flex-col justify-center items-center transition-colors duration-500 px-6 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-sky-100 to-white text-gray-800"
      }`}
    >      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Hi, I'm Sivabalan
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Python Developer | ML Enthusiast | Critical Thinker
      </h2>
      
      <p className="text-lg md:text-xl text-center max-w-xl">
        I specialize in building intelligent, data-driven applications using Python, machine learning, and modern web technologies. Explore my portfolio to see how I bring clean code and creative solutions together.
      </p>

      <Link
        to="/projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        View Projects
      </Link>
    </div>
  );
};

export default Home;
