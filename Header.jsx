// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Fymo Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-800">Fymo Tools</span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/tax-tools" className="text-gray-600 hover:text-blue-600">Tax</Link>
          <Link to="/health-tools" className="text-gray-600 hover:text-blue-600">Health</Link>
          <Link to="/writing-tools" className="text-gray-600 hover:text-blue-600">Writing</Link>
          <Link to="/seo-tools" className="text-gray-600 hover:text-blue-600">SEO</Link>
          <Link to="/image-tools" className="text-gray-600 hover:text-blue-600">Image</Link>
          <Link to="/daily-tools" className="text-gray-600 hover:text-blue-600">Daily</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          <Link to="/donate" className="text-gray-600 hover:text-green-600 font-semibold">Donate</Link>
        </nav>

        {/* Language Toggle Placeholder */}
        <div className="text-sm text-gray-600">
          <span className="cursor-pointer">EN</span> / <span className="cursor-pointer">ES</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
