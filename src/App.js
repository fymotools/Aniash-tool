import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaxTools from './pages/TaxTools';
import HealthTools from './pages/HealthTools';
import WritingTools from './pages/WritingTools';
import SEOTools from './pages/SEOTools';
import ImageTools from './pages/ImageTools';
import DailyTools from './pages/DailyTools';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tax-tools" element={<TaxTools />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/writing-tools" element={<WritingTools />} />
            <Route path="/seo-tools" element={<SEOTools />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/daily-tools" element={<DailyTools />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
