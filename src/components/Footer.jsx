import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fymo Tools</h3>
            <p className="text-gray-400">
              Free online tools for taxes, health, writing, SEO, images, and daily tasks.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/tax-tools" className="text-gray-400 hover:text-white">Tax Tools</Link></li>
              <li><Link to="/health-tools" className="text-gray-400 hover:text-white">Health Tools</Link></li>
              <li><Link to="/writing-tools" className="text-gray-400 hover:text-white">Writing Tools</Link></li>
              <li><Link to="/seo-tools" className="text-gray-400 hover:text-white">SEO Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get updates on new tools</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Fymo Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
