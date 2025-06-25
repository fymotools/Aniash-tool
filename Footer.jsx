// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About */}
        <div>
          <h2 className="font-bold mb-2">Fymo Tools</h2>
          <p className="text-sm">30+ free tools to make your daily tasks easier. SEO, health, image, writing, and more.</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="mailto:fymotools@gmail.com">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-bold mb-2">Connect with us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">▶️</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-3 bg-gray-200">
        &copy; 2025 Fymo Tools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
