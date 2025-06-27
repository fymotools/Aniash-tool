import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaHeartbeat, FaPenAlt, FaSearch, FaImage, FaCalendarAlt } from 'react-icons/fa';

const ToolCard = ({ title, description, icon, link }) => {
  const getIcon = () => {
    switch(icon) {
      case 'tax':
        return <FaCalculator className="text-2xl text-blue-500" />;
      case 'health':
        return <FaHeartbeat className="text-2xl text-green-500" />;
      case 'writing':
        return <FaPenAlt className="text-2xl text-purple-500" />;
      case 'seo':
        return <FaSearch className="text-2xl text-orange-500" />;
      case 'image':
        return <FaImage className="text-2xl text-red-500" />;
      case 'daily':
        return <FaCalendarAlt className="text-2xl text-yellow-500" />;
      default:
        return <FaCalculator className="text-2xl text-blue-500" />;
    }
  };

  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100">
        <div className="flex items-start mb-4">
          <div className="mr-4 mt-1">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <div className="text-blue-500 font-medium mt-4 flex items-center">
          Use Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
