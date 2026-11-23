
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import "../styles/HomeHero.css";

function HomeHero() {
  return (
    <div className="hero-content">

      <div className="hero-tag">
        <Sparkles size={14} />
        <span>YOUR PERSONAL BUSINESS CARD MAKER</span>
      </div>

      <h1>
        Your Identity.
        <br />
        <span>Your Card.</span>
      </h1>

      <p className="hero-description">
        Create professional business cards that make a lasting
        impression. Design, preview and download your card in minutes.
      </p>

      <Link to="/create" className="hero-primary-btn">
        Create Your Card
        <ArrowRight size={18} />
      </Link>

      <div className="hero-features">
        <span>
          <Check size={15} />
          Easy to create
        </span>

        <span>
          <Check size={15} />
          Professional designs
        </span>

        <span>
          <Check size={15} />
          PNG & PDF downloads
        </span>
      </div>

    </div>
  );
}

export default HomeHero;
