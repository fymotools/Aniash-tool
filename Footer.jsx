import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Phone, Globe, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      rights: "All rights reserved.",
    },
    es: {
      contact: "Contacto",
      email: "Correo",
      phone: "Teléfono",
      rights: "Todos los derechos reservados.",
    },
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.png" alt="Fymo Logo" className="h-12 mb-4 rounded-xl" />
          <p className="text-sm">© 2025 Fymo Tools. {labels[language].rights}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{labels[language].contact}</h4>
          <p className="flex items-center text-sm"><Mail size={16} className="mr-2" /> fymotools@gmail.com</p>
          <p className="flex items-center text-sm"><Phone size={16} className="mr-2" /> +92 302 7129449</p>
          <p className="flex items-center text-sm"><Phone size={16} className="mr-2" /> 923448292001</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <div className="flex space-x-4 mt-1">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
