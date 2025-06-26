import React from "react";
import { useLanguage } from "../context/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      intro:
        "At Fymo Tools, we take your privacy seriously. Here's how we handle your information:",
      points: [
        "We do not collect any personal data.",
        "All tools run directly in your browser — no server saves your input.",
        "We use Google AdSense, which may use cookies for ad personalization.",
        "We do not share or sell any user data.",
        "This site may link to third-party websites. We are not responsible for their policies.",
      ],
      contact: "For any privacy concerns, contact us at fymotools@gmail.com.",
    },
    es: {
      title: "Política de Privacidad",
      intro:
        "En Fymo Tools, nos tomamos tu privacidad en serio. Aquí explicamos cómo manejamos tu información:",
      points: [
        "No recopilamos ningún dato personal.",
        "Todas las herramientas se ejecutan directamente en tu navegador — ningún servidor guarda tu entrada.",
        "Usamos Google AdSense, que puede usar cookies para personalizar anuncios.",
        "No compartimos ni vendemos datos de usuarios.",
        "Este sitio puede contener enlaces a sitios de terceros. No somos responsables de sus políticas.",
      ],
      contact:
        "Para cualquier inquietud de privacidad, contáctanos en fymotools@gmail.com.",
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        {content[language].title}
      </h1>

      <p className="text-gray-700 mb-6">{content[language].intro}</p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {content[language].points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-gray-600">{content[language].contact}</p>
    </div>
  );
};

export default PrivacyPolicy;
