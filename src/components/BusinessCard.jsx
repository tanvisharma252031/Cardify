
import {
  Mail,
  Phone,
  Building2,
  Link,
} from "lucide-react";

import "../styles/BusinessCard.css";

function BusinessCard({ formData }) {
  const initials = formData.fullName
    ? formData.fullName
        .split(" ")
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "CC";

  const website = formData.website
    ? formData.website.replace(/^https?:\/\//, "")
    : "";

  return (
    <div className="business-cards" id="business-cards">

      {/* Front Side */}
      <div className="card-section">

        <div
          className="business-card front-card"
          id="front-card"
        >
          <div className="front-top">
            <div>
              <h2>{formData.fullName}</h2>
              <p className="card-role">{formData.role}</p>
            </div>

            <div className="card-initials">
              {initials}<span>.</span>
            </div>
          </div>

          <div className="card-contact">
            {formData.email && (
              <div>
                <Mail />
                <span>{formData.email}</span>
              </div>
            )}

            {formData.phone && (
              <div>
                <Phone />
                <span>{formData.phone}</span>
              </div>
            )}

            {formData.company && (
              <div>
                <Building2 />
                <span>{formData.company}</span>
              </div>
            )}

            {website && (
              <div>
                <Link />
                <span>{website}</span>
              </div>
            )}
          </div>

          <div className="card-wave wave-one"></div>
          <div className="card-wave wave-two"></div>
          <div className="card-wave wave-three"></div>
        </div>

        <span className="card-label">Front</span>
      </div>

      {/* Back Side */}
      <div className="card-section">

        <div
          className="business-card back-card"
          id="back-card"
        >
          <div className="back-initials">
            {initials}<span>.</span>
          </div>

          <h3>{formData.fullName.toUpperCase()}</h3>

          <div className="back-line"></div>

          <p>{formData.role}</p>

          <div className="card-wave wave-one"></div>
          <div className="card-wave wave-two"></div>
          <div className="card-wave wave-three"></div>
        </div>

        <span className="card-label">Back</span>
      </div>

    </div>
  );
}

export default BusinessCard;
