
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <main className="home-page">

      <section className="home-hero">

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

          <div className="hero-buttons">
            <Link to="/create" className="hero-primary-btn">
              Create Your Card
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-features">
            <span><Check size={15} /> Easy to create</span>
            <span><Check size={15} /> Professional designs</span>
            <span><Check size={15} /> PNG & PDF downloads</span>
          </div>
        </div>

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

      </section>

      <section className="home-bottom">
        <div>
          <span className="bottom-eyebrow">MAKE YOUR FIRST IMPRESSION COUNT</span>
          <h2>Everything you need. Nothing you don't.</h2>
          <p>
            A simple way to turn your professional details into a
            business card you're proud to share.
          </p>
        </div>

        <Link to="/create" className="bottom-link">
          Get Started <ArrowRight size={17} />
        </Link>
      </section>

    </main>
  );
}

export default HomePage;
