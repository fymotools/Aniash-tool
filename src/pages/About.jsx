import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Fymo Tools",
      intro:
        "Fymo Tools is a free, all-in-one platform offering 30+ online tools to make your life easier. Whether you're calculating tax, generating content, compressing images, or just taking notes, Fymo has you covered.",
      mission:
        "Our mission is to provide powerful tools that are accessible to everyone – completely free and without any signup.",
      vision:
        "We believe technology should serve people, not profit. That’s why Fymo Tools will always be free and user-focused.",
      thanks: "Thank you for using Fymo Tools! 💖",
    },
    es: {
      title: "Sobre Fymo Tools",
      intro:
        "Fymo Tools es una plataforma gratuita todo-en-uno que ofrece más de 30 herramientas en línea para facilitar tu vida. Ya sea que estés calculando impuestos, generando contenido, comprimiendo imágenes o tomando notas, Fymo te cubre.",
      mission:
        "Nuestra misión es ofrecer herramientas potentes accesibles para todos – completamente gratis y sin registro.",
      vision:
        "Creemos que la tecnología debe servir a las personas, no al beneficio. Por eso, Fymo Tools siempre será gratuito y centrado en el usuario.",
      thanks: "¡Gracias por usar Fymo Tools! 💖",
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        {content[language].title}
      </h1>
      <p className="text-gray-700 mb-4 text-lg">{content[language].intro}</p>
      <p className="text-gray-700 mb-4">{content[language].mission}</p>
      <p className="text-gray-700 mb-4">{content[language].vision}</p>
      <p className="text-center mt-8 text-indigo-600 font-medium text-lg animate-pulse">
        {content[language].thanks}
      </p>
    </div>
  );
};

export default About;
