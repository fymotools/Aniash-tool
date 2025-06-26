import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      welcome: "Welcome to Fymo Tools",
      tagline: "Powerful Free Tools for Daily Use",
      description:
        "Fymo Tools offers 30+ smart utilities across Tax, Health, SEO, Writing, Images & More. 100% free, mobile-friendly, and multilingual.",
      explore: "Explore Tools",
      categories: [
        { title: "Tax Tools", path: "/tax-tools" },
        { title: "Health Tools", path: "/health-tools" },
        { title: "Writing Tools", path: "/writing-tools" },
        { title: "SEO Tools", path: "/seo-tools" },
        { title: "Image Tools", path: "/image-tools" },
        { title: "Daily Tools", path: "/daily-tools" },
      ],
    },
    es: {
      welcome: "Bienvenido a Fymo Tools",
      tagline: "Herramientas Gratuitas para el Uso Diario",
      description:
        "Fymo Tools ofrece más de 30 utilidades inteligentes en impuestos, salud, SEO, escritura, imágenes y más. 100% gratis, móvil y multilingüe.",
      explore: "Explorar Herramientas",
      categories: [
        { title: "Herramientas Fiscales", path: "/tax-tools" },
        { title: "Herramientas de Salud", path: "/health-tools" },
        { title: "Herramientas de Escritura", path: "/writing-tools" },
        { title: "Herramientas SEO", path: "/seo-tools" },
        { title: "Herramientas de Imagen", path: "/image-tools" },
        { title: "Herramientas Diarias", path: "/daily-tools" },
      ],
    },
  };

  return (
    <div className="text-center py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 animate-pulse mb-4">
        {content[language].welcome}
      </h1>
      <h2 className="text-xl font-medium text-gray-700 mb-2">
        {content[language].tagline}
      </h2>
      <p className="text-gray-500 mb-6">{content[language].description}</p>

      <Link
        to="/daily-tools"
        className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        {content[language].explore}
      </Link>

      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {content[language].categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="border p-4 rounded-lg shadow hover:shadow-md bg-white hover:bg-indigo-50 transition"
          >
            <h3 className="text-lg font-semibold text-indigo-600">{cat.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
