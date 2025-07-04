// src/components/Navbar.jsx
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`w-full shadow-md px-6 py-3 fixed top-0 z-50 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">Sivabalan</Link>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`flex-col lg:flex-row lg:flex gap-6 items-center ${isOpen ? 'flex mt-4' : 'hidden'} lg:mt-0`}>
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
          <Link to="/resume" className="hover:text-blue-500 transition">Resume</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
