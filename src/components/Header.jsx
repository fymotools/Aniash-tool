import React from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src="/assets/logos/logo.png" alt="Fymo Tools" className="h-10 mr-3" />
            <span className="text-2xl font-bold text-blue-600">Fymo Tools</span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-1 md:space-x-6">
          <Link to="/tax-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Tax Tools</Link>
          <Link to="/health-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Health Tools</Link>
          <Link to="/writing-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Writing Tools</Link>
          <Link to="/seo-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">SEO Tools</Link>
          <Link to="/image-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Image Tools</Link>
          <Link to="/daily-tools" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Daily Tools</Link>
          
          <div className="flex items-center ml-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <FaSearch className="text-lg" />
            </button>
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
