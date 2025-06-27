import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HealthTools from "./pages/HealthTools";
import TaxTools from "./pages/TaxTools";
import WritingTools from "./pages/WritingTools";
import SEOTools from "./pages/SEOTools";
import ImageTools from "./pages/ImageTools";
import DailyTools from "./pages/DailyTools";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Helmet } from "react-helmet";

const Meta = () => {
  const { language } = useLanguage();

  const metaData = {
    en: {
      title: "Fymo Tools - Free Online Tools for Everyone",
      description: "Access 30+ tools for tax, health, writing, SEO, images & more. 100% free, fast and mobile-friendly.",
    },
    es: {
      title: "Fymo Tools - Herramientas en línea gratuitas",
      description: "Accede a más de 30 herramientas gratuitas para impuestos, salud, escritura, SEO, imágenes y más.",
    },
  };

  return (
    <Helmet>
      <title>{metaData[language].title}</title>
      <meta name="description" content={metaData[language].description} />
      <meta property="og:title" content={metaData[language].title} />
      <meta property="og:description" content={metaData[language].description} />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://fymo-tools.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData[language].title} />
      <meta name="twitter:description" content={metaData[language].description} />
      <link rel="canonical" href="https://fymo-tools.vercel.app" />
    </Helmet>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Meta />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-tools" element={<HealthTools />} />
          <Route path="/tax-tools" element={<TaxTools />} />
          <Route path="/writing-tools" element={<WritingTools />} />
          <Route path="/seo-tools" element={<SEOTools />} />
          <Route path="/image-tools" element={<ImageTools />} />
          <Route path="/daily-tools" element={<DailyTools />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;
