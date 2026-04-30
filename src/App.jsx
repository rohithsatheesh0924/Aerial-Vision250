// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all service pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";



import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen  overflow-x-hidden">
        <Navbar />

        <main className=" relative z-10">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            

            {/* Optional: catch-all 404 */}
            <Route path="*" element={<div className="text-white p-8">Page not found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;