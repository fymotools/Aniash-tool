import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const navItems = {
    en: ["Home", "Tools", "Blog", "Donate", "Contact", "About"],
    es: ["Inicio", "Herramientas", "Blog", "Donar", "Contacto", "Acerca de"],
  };

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Fymo Logo" className="h-10 mr-2 rounded-xl" />
          <span className="text-xl font-bold text-indigo-700">Fymo Tools</span>
        </Link>

        <nav className="space-x-4 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">{navItems[language][0]}</Link>
          <Link to="/health-tools" className="text-gray-700 hover:text-indigo-600">{navItems[language][1]}</Link>
          <Link to="/blog" className="text-gray-700 hover:text-indigo-600">{navItems[language][2]}</Link>
          <Link to="/donate" className="text-gray-700 hover:text-indigo-600">{navItems[language][3]}</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">{navItems[language][4]}</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">{navItems[language][5]}</Link>
        </nav>

        <button
          onClick={toggleLanguage}
          className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
