import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-6 py-10 transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-sky-100 to-white text-gray-800'}`}>
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I'm <strong>Sivabalan</strong>, a passionate and self-driven developer based in Coimbatore. I'm currently pursuing my B.E. in Computer Science and Engineering at PPG Institute of Technology (2023–2027).
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I enjoy building responsive and elegant web applications, primarily using Python, React, and Tailwind CSS. My areas of interest include data-driven apps, machine learning, full-stack development, and problem-solving.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          I’ve built and deployed several projects, including a GST billing system, air quality predictor, customer churn analyzer, and more. I also hold a design patent for an IoT Smart Weighing Machine and actively participate in ideathons and coding events.
        </p>
      </div>
    </div>
  );
};

export default About;
