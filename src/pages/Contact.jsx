import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("fymotools@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = {
    en: {
      title: "Contact Us",
      emailLabel: "Email:",
      whatsappLabel: "WhatsApp Chat:",
      note: "Feel free to contact us for any suggestions, issues or collaborations.",
      copied: "Email copied to clipboard ✅",
    },
    es: {
      title: "Contáctanos",
      emailLabel: "Correo electrónico:",
      whatsappLabel: "Chat de WhatsApp:",
      note: "No dudes en contactarnos para sugerencias, problemas o colaboraciones.",
      copied: "Correo copiado al portapapeles ✅",
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        {content[language].title}
      </h1>

      <p className="text-gray-600 mb-6 text-center">{content[language].note}</p>

      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border">
        {/* Email */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{content[language].emailLabel}</h2>
          <p className="text-indigo-600 font-medium">
            fymotools@gmail.com
            <button
              onClick={handleCopy}
              className="ml-2 text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </p>
          {copied && (
            <p className="text-green-600 text-sm mt-1 animate-bounce">
              {content[language].copied}
            </p>
          )}
        </div>

        {/* WhatsApp */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{content[language].whatsappLabel}</h2>
          <a
            href="https://wa.me/923027129449"
            target="_blank"
            rel="Emmanueil Masih"
            className="text-blue-600 underline"
          >
            +92 302 7129449
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
