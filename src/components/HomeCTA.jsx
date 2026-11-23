
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styles/HomeCTA.css";

function HomeCTA() {
  return (
    <section className="home-bottom">

      <div>
        <span className="bottom-eyebrow">
          MAKE YOUR FIRST IMPRESSION COUNT
        </span>

        <h2>Everything you need. Nothing you don't.</h2>

        <p>
          A simple way to turn your professional details into a
          business card you're proud to share.
        </p>
      </div>

      <Link to="/create" className="bottom-link">
        Get Started
        <ArrowRight size={17} />
      </Link>

    </section>
  );
}

export default HomeCTA;
