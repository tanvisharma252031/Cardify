
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RefreshCw, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">

      <Link
        to="/"
        className="navbar-logo"
        onClick={() => setMenuOpen(false)}
      >
        <RefreshCw className="logo-icon" />
        <span>CARDIFY</span>
      </Link>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/create"
          className={location.pathname === "/create" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Create Card
        </Link>

        <Link
          to="/download"
          className={location.pathname === "/download" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Preview & Download
        </Link>

      </nav>

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
