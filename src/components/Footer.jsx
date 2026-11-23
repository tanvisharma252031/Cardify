
import { RefreshCw } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* BRAND SECTION */}
      <div className="footer-brand">
        <div className="footer-logo">
          <RefreshCw />
          <span>CARDIFY</span>
        </div>

        <p>
          Create, preview and download professional
          <br />
          business cards in seconds.
        </p>
      </div>

      {/* FOOTER NAVIGATION */}
      <nav className="footer-links">
        <a href="#home">Home</a>
        <a href="#create">Create Card</a>
        <a href="#preview">Preview</a>
        <a href="#download">Download</a>
      </nav>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        © 2026 Cardify. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
