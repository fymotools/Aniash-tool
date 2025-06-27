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
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      {/* ... your header, routes, footer ... */}

      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="fymoCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience. We use Google Analytics and AdSense.{" "}
        <a href="/privacy-policy" className="underline text-blue-300">Read more</a>
      </CookieConsent>
    </>
  );
}

export default App;
