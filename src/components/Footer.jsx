import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-12">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Siva-Balan-V" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sivabalan51103" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl">
          <FaLinkedin />
        </a>
        <a href="mailto:sivabalanv2005@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Siva Balan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
