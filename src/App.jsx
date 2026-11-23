
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Steps from "./components/Steps";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DownloadPage from "./pages/DownloadPage";

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

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const currentStep = location.pathname === "/download" ? 2 : 1;

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {!isHomePage && <Steps currentStep={currentStep} />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/create"
          element={
            <CreatePage
              formData={formData}
              setFormData={setFormData}
            />
          }
        />

        <Route
          path="/download"
          element={<DownloadPage formData={formData} />}
        />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
