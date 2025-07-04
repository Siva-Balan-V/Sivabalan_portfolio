import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
  className={`transition-all duration-700 ease-in-out opacity-100 min-h-screen ${
    isDark
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900"
  }`}
>
    <div
      className={`min-h-screen px-6 py-10 transition-colors duration-500 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-sky-100 to-white text-gray-800'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} space-y-5`}
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded font-semibold shadow hover:opacity-90 transition ${
              isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
