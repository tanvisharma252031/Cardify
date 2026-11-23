
import { Sparkles } from "lucide-react";

import "../styles/CardShowcase.css";

function CardShowcase() {
  return (
    <div className="hero-visual">

      <div className="visual-glow"></div>

      <div className="floating-label label-top">
        <Sparkles size={15} />
        Simple. Professional. You.
      </div>

      <div className="sample-card">

        <div className="sample-card-top">
          <div className="sample-logo">A</div>
          <span>PERSONAL BRAND</span>
        </div>

        <div className="sample-card-info">
          <h2>Alex Morgan</h2>
          <p>Creative Director</p>
        </div>

        <div className="sample-card-contact">
          <span>alexmorgan@email.com</span>
          <span>+1 234 567 890</span>
          <span>www.alexmorgan.com</span>
        </div>

        <div className="sample-wave sample-wave-one"></div>
        <div className="sample-wave sample-wave-two"></div>

      </div>

      <div className="floating-label label-bottom">
        <span className="label-dot"></span>
        Made with Cardify
      </div>

    </div>
  );
}

export default CardShowcase;
