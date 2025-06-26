import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const nav = {
    en: [
      { name: "Home", path: "/" },
      { name: "Tax Tools", path: "/tax-tools" },
      { name: "Health Tools", path: "/health-tools" },
      { name: "Writing Tools", path: "/writing-tools" },
      { name: "SEO Tools", path: "/seo-tools" },
      { name: "Image Tools", path: "/image-tools" },
      { name: "Daily Tools", path: "/daily-tools" },
      { name: "Blog", path: "/blog" },
      { name: "Donate", path: "/donate" },
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
    ],
    es: [
      { name: "Inicio", path: "/" },
      { name: "Herramientas Fiscales", path: "/tax-tools" },
      { name: "Herramientas de Salud", path: "/health-tools" },
      { name: "Herramientas de Escritura", path: "/writing-tools" },
      { name: "Herramientas SEO", path: "/seo-tools" },
      { name: "Herramientas de Imagen", path: "/image-tools" },
      { name: "Herramientas Diarias", path: "/daily-tools" },
      { name: "Blog", path: "/blog" },
      { name: "Donar", path: "/donate" },
      { name: "Contacto", path: "/contact" },
      { name: "Sobre", path: "/about" },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-indigo-700 text-white shadow-md">
        <h1 className="text-xl font-bold">Fymo Tools</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={toggleLanguage}
            className="bg-white text-indigo-600 px-2 py-1 rounded text-xs"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
          <button onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-indigo-700">Fymo Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3">
          {nav[language].map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              onClick={() => setOpen(false)}
              className="text-indigo-700 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
