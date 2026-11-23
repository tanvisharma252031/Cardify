
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import BusinessCard from "../components/BusinessCard";
import DownloadOptions from "../components/DownloadOptions";

import "../styles/DownloadPage.css";

function DownloadPage({ formData }) {
  const navigate = useNavigate();

  return (
    <main className="download-page">

      <div className="download-heading">
        <h1>Download Your Card</h1>
        <p>
          Your business card is ready! Choose a format and download it.
        </p>
      </div>

      <section className="download-container">

        <div className="card-preview-section">
          <BusinessCard formData={formData} />
        </div>

        <DownloadOptions />

      </section>

      <button
        className="back-btn"
        onClick={() => navigate("/create")}
      >
        <ArrowLeft size={19} />
        Back to Create Card
      </button>

    </main>
  );
}

export default DownloadPage;
