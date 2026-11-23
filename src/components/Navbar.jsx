
import { useState } from "react";
import { RefreshCw, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <RefreshCw className="logo-icon" />
        <span>CARDIFY</span>
      </div>

      {/* Navigation */}
      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a
          href="#create"
          className="active"
          onClick={() => setMenuOpen(false)}
        >
          Create Card
        </a>

        <a href="#preview" onClick={() => setMenuOpen(false)}>
          Preview
        </a>

        <a href="#download" onClick={() => setMenuOpen(false)}>
          Download
        </a>
      </nav>

      {/* Right Actions */}
      <div className="navbar-actions">
        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

    </header>
  );
}

export default Navbar;
