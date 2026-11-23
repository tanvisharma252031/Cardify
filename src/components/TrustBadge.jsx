
import "../styles/TrustBadge.css";

function TrustBadge() {
  return (
    <div className="trust-badge">

      <div className="trust-avatars">
        <img
          src="https://i.pravatar.cc/40?img=47"
          alt="Professional"
        />

        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Professional"
        />

        <img
          src="https://i.pravatar.cc/40?img=44"
          alt="Professional"
        />
      </div>

      <span>Trusted by 10K+ professionals</span>

    </div>
  );
}

export default TrustBadge;
