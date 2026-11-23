
import "../styles/Steps.css";

function Steps({ currentStep = 1 }) {
  return (
    <div className="page-steps">

      <div className={`page-step ${currentStep >= 1 ? "active" : ""}`}>
        <span>01</span>
        <p>Create Card</p>
      </div>

      <div className="page-step-line"></div>

      <div className={`page-step ${currentStep >= 2 ? "active" : ""}`}>
        <span>02</span>
        <p>Preview & Download</p>
      </div>

    </div>
  );
}

export default Steps;
