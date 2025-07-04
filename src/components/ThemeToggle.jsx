import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="border px-3 py-1 rounded-md text-sm shadow-sm dark:text-white"
    >
      {isDark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
