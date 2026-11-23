
import { useState } from "react";

import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import Hero from "./components/Hero";
import CreateCardForm from "./components/CreateCardForm";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">

        <Steps />

        <Hero />

        <CreateCardForm
          formData={formData}
          setFormData={setFormData}
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;
