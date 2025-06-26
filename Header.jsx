import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const navItems = {
    en: ["Home", "Tools", "Blog", "Donate", "Contact", "About"],
    es: ["Inicio", "Herramientas", "Blog", "Donar", "Contacto", "Sobre"],
  };

  const links = ["/", "/health-tools", "/blog", "/donate", "/contact", "/about"];

  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">
          <Link to="/">Fymo Tools</Link>
        </h1>

        <nav className="hidden md:flex gap-4 text-sm">
          {navItems[language].map((item, i) => (
            <Link key={i} to={links[i]} className="hover:underline">
              {item}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="bg-white text-indigo-700 px-2 py-1 rounded text-sm"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
