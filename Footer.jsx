import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      rights: "© 2025 Fymo Tools. All rights reserved.",
      contact: "Contact us",
      email: "fymotools@gmail.com",
    },
    es: {
      rights: "© 2025 Fymo Tools. Todos los derechos reservados.",
      contact: "Contáctanos",
      email: "fymotools@gmail.com",
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">{content[language].rights}</p>
      <p className="text-sm">
        {content[language].contact}:{" "}
        <a href="mailto:fymotools@gmail.com" className="text-blue-400 hover:underline">
          {content[language].email}
        </a>
      </p>

      <div className="flex justify-center mt-4 space-x-4 text-sm">
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://youtube.com" target="_blank">YouTube</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
