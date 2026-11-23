
import { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import TrustBadge from "./components/TrustBadge";
import Hero from "./components/Hero";
import CreateCardForm from "./components/CreateCardForm";
import Footer from "./components/Footer";

function App() {

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Business Card Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    company: "",
    description: "",
    website: "",
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content */}
      <main className="main-content">

        {/* Trust Badge */}
        <TrustBadge />

        {/* Hero Section */}
        <Hero />

        {/* Create Card Form */}
        <CreateCardForm
          formData={formData}
          setFormData={setFormData}
        />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
