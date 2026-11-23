
import { useState } from "react";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

import "../styles/DownloadOptions.css";

function DownloadOptions() {
  const [downloading, setDownloading] = useState(false);

  const handlePNGDownload = async () => {
    try {
      setDownloading(true);

      const card = document.getElementById("business-cards");

      if (!card) {
        throw new Error("Business card element not found");
      }

      const image = await toPng(card, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = "Cardify-Business-Card.png";
      link.href = image;
      link.click();

    } catch (error) {
      console.error("PNG Error:", error);
      alert("PNG download failed: " + error.message);
    } finally {
      setDownloading(false);
    }
  };

  const handlePDFDownload = async () => {
    try {
      setDownloading(true);

      const front = document.getElementById("front-card");
      const back = document.getElementById("back-card");

      if (!front || !back) {
        throw new Error("Front or back card not found");
      }

      const frontImage = await toPng(front, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });

      const backImage = await toPng(back, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [200, 100],
      });

      pdf.addImage(frontImage, "PNG", 10, 24, 85, 52);
      pdf.addImage(backImage, "PNG", 105, 24, 85, 52);

      pdf.save("Cardify-Business-Card.pdf");

    } catch (error) {
      console.error("PDF Error:", error);
      alert("PDF download failed: " + error.message);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="download-options">
      <h2>Download As</h2>

      <button
        className="download-btn png-btn"
        onClick={handlePNGDownload}
        disabled={downloading}
      >
        <Download size={19} />
        {downloading ? "Preparing..." : "Download PNG"}
      </button>

      <button
        className="download-btn pdf-btn"
        onClick={handlePDFDownload}
        disabled={downloading}
      >
        <Download size={19} />
        {downloading ? "Preparing..." : "Download PDF"}
      </button>
    </div>
  );
}

export default DownloadOptions;
