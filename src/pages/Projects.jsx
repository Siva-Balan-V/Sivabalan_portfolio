import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const projects = [
  {
    title: 'Rotaract Club of PPG Institute of Technology',
    description: 'A website made for my Rotaract Club.',
    tech: 'ReactJS,EmailJS',
    link: 'https://github.com/Siva-Balan-V/rac_ppgit',
  },
  {
    title: 'Yummy Finder',
    description: 'A smart restaurant and food discovery app with recommendation features.',
    tech: 'Python, Django, Bootstrap',
    link: 'https://github.com/Siva-Balan-V/yummy-finder',
  },
  {
    title: 'Air Quality Predictor',
    description: 'A data science project that predicts AQI using machine learning and real-time API.',
    tech: 'Python, Scikit-learn, Flask',
    link: 'https://github.com/Siva-Balan-V/NM_Sivabalan_AirPreQ',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'A predictive model that identifies potential customer churn using ML.',
    tech: 'Python, Pandas, Streamlit',
    link: 'https://github.com/Siva-Balan-V/Customer_Churn',
  }
];

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
  className={`transition-all duration-700 ease-in-out opacity-100 min-h-screen ${
    isDark
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900"
  }`}
>
    <div className={`min-h-screen px-6 py-10 transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-sky-100 to-white text-gray-800'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 transition transform hover:scale-[1.02] ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <p className="text-sm mb-4">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-auto px-4 py-2 rounded-full font-medium shadow ${isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} hover:opacity-90 transition`}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Projects;
