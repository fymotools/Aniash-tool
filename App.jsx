// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaxTools from './pages/TaxTools';
import HealthTools from './pages/HealthTools';
import WritingTools from './pages/WritingTools';
import SeoTools from './pages/SeoTools';
import ImageTools from './pages/ImageTools';
import DailyTools from './pages/DailyTools';
import Donate from './pages/Donate';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tax-tools" element={<TaxTools />} />
            <Route path="/health-tools" element={<HealthTools />} />
            <Route path="/writing-tools" element={<WritingTools />} />
            <Route path="/seo-tools" element={<SeoTools />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/daily-tools" element={<DailyTools />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
