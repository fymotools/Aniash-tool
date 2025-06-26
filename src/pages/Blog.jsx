import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Fymo Blog",
      subtitle: "Tips, guides & tool explanations from each category.",
      posts: [
        {
          title: "Mastering Tax Tools",
          desc: "Learn how to calculate income tax, GST, and more with ease.",
          link: "/blog/tax-tools",
          img: "/assets/blog/tax.jpg",
        },
        {
          title: "Stay Fit with Health Tools",
          desc: "Discover your BMI, ideal weight, and daily water needs.",
          link: "/blog/health-tools",
          img: "/assets/blog/health.jpg",
        },
        {
          title: "Smart Writing Tools Guide",
          desc: "Write blogs, essays, summaries & articles quickly with AI.",
          link: "/blog/writing-tools",
          img: "/assets/blog/writing.jpg",
        },
        {
          title: "Boost Ranking with SEO Tools",
          desc: "Generate meta tags, analyze backlinks, and optimize content.",
          link: "/blog/seo-tools",
          img: "/assets/blog/seo.jpg",
        },
        {
          title: "Make Images Work for You",
          desc: "Compress, resize, convert or apply effects to images.",
          link: "/blog/image-tools",
          img: "/assets/blog/image.jpg",
        },
        {
          title: "Daily Use Tools to Simplify Life",
          desc: "Calculate age, record screen, convert units & more.",
          link: "/blog/daily-tools",
          img: "/assets/blog/daily.jpg",
        },
      ],
    },
    es: {
      title: "Blog de Fymo",
      subtitle: "Consejos, guías y explicaciones de herramientas por categoría.",
      posts: [
        {
          title: "Domina las Herramientas Fiscales",
          desc: "Aprende a calcular impuestos sobre la renta, GST y más fácilmente.",
          link: "/blog/tax-tools",
          img: "/assets/blog/tax.jpg",
        },
        {
          title: "Mantente Saludable con Herramientas de Salud",
          desc: "Descubre tu IMC, peso ideal y necesidades de agua.",
          link: "/blog/health-tools",
          img: "/assets/blog/health.jpg",
        },
        {
          title: "Guía de Herramientas de Escritura Inteligente",
          desc: "Escribe blogs, ensayos, resúmenes y artículos rápidamente con IA.",
          link: "/blog/writing-tools",
          img: "/assets/blog/writing.jpg",
        },
        {
          title: "Mejora el SEO con Herramientas Inteligentes",
          desc: "Genera etiquetas meta, analiza backlinks y optimiza contenido.",
          link: "/blog/seo-tools",
          img: "/assets/blog/seo.jpg",
        },
        {
          title: "Optimiza Imágenes Fácilmente",
          desc: "Comprime, redimensiona, convierte o aplica efectos a imágenes.",
          link: "/blog/image-tools",
          img: "/assets/blog/image.jpg",
        },
        {
          title: "Herramientas Diarias para Facilitar tu Vida",
          desc: "Calcula edad, graba pantalla, convierte unidades y más.",
          link: "/blog/daily-tools",
          img: "/assets/blog/daily.jpg",
        },
      ],
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2 text-center">
        {content[language].title}
      </h1>
      <p className="text-gray-600 text-center mb-8">{content[language].subtitle}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {content[language].posts.map((post, i) => (
          <Link
            to={post.link}
            key={i}
            className="bg-white shadow hover:shadow-md rounded-xl overflow-hidden transition"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-700">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
