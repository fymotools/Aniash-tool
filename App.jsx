// src/App.jsx 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

// Layout & Shared
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import TaxTools from "./pages/TaxTools";
import HealthTools from "./pages/HealthTools";
import WritingTools from "./pages/WritingTools";
import SEOTools from "./pages/SEOTools";
import ImageTools from "./pages/ImageTools";
import DailyTools from "./pages/DailyTools";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tax-tools" element={<TaxTools />} />
              <Route path="/health-tools" element={<HealthTools />} />
              <Route path="/writing-tools" element={<WritingTools />} />
              <Route path="/seo-tools" element={<SEOTools />} />
              <Route path="/image-tools" element={<ImageTools />} />
              <Route path="/daily-tools" element={<DailyTools />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
