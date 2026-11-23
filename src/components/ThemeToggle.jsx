
import { Sun, Moon } from "lucide-react";
import "../styles/ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

export default ThemeToggle;
