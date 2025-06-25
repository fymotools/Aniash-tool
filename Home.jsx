// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Fymo Tools</h1>
      <p className="text-gray-600">Access 30+ Free Online Tools – Health, Tax, SEO, Writing & more.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <Link to="/tax-tools" className="bg-blue-100 p-4 rounded-xl shadow hover:bg-blue-200">💰 Tax Tools</Link>
        <Link to="/health-tools" className="bg-green-100 p-4 rounded-xl shadow hover:bg-green-200">🧘 Health Tools</Link>
        <Link to="/writing-tools" className="bg-yellow-100 p-4 rounded-xl shadow hover:bg-yellow-200">✍️ Writing Tools</Link>
        <Link to="/seo-tools" className="bg-purple-100 p-4 rounded-xl shadow hover:bg-purple-200">📈 SEO Tools</Link>
        <Link to="/image-tools" className="bg-pink-100 p-4 rounded-xl shadow hover:bg-pink-200">🖼️ Image Tools</Link>
        <Link to="/daily-tools" className="bg-gray-200 p-4 rounded-xl shadow hover:bg-gray-300">📆 Daily Tools</Link>
      </div>
    </div>
  );
}

export default Home;
