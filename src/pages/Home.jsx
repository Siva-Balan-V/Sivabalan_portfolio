import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors duration-700 ease-in-out min-h-screen flex flex-col justify-center items-center px-6 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center transition-opacity duration-500">
        Hi, I'm Sivabalan
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Python Developer | ML Enthusiast | Critical Thinker
      </h2>
      <p className="text-lg md:text-xl text-center max-w-xl">
        I specialize in building intelligent, data-driven applications using Python, machine learning, and modern web technologies.
      </p>
    </div>
  );
};

export default Home;
