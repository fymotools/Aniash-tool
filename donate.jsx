// src/pages/Donate.jsx
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Donate = () => {
  const [copied, setCopied] = useState("");
  const { language } = useLanguage();

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const content = {
    en: {
      title: "Support Fymo Tools 💖",
      message:
        "If you find our free tools helpful, consider supporting us. Your donation helps keep this platform running and 100% free for everyone.",
      jazzcash: "Donate via JazzCash",
      jazzcashNote: "Use mobile transfer or QR in your JazzCash app.",
      easypaisa: "Donate via Easypaisa",
      easypaisaNote: "Send via Easypaisa app or mobile account.",
      email: "Contact Email:",
      thankyou: "Thank you for supporting Fymo Tools. Every rupee counts. 🙏",
    },
    es: {
      title: "Apoya a Fymo Tools 💖",
      message:
        "Si encuentras útiles nuestras herramientas gratuitas, considera apoyarnos. Tu donación ayuda a mantener esta plataforma funcionando y 100% gratuita para todos.",
      jazzcash: "Donar a través de JazzCash",
      jazzcashNote: "Usa la transferencia móvil o QR en tu aplicación JazzCash.",
      easypaisa: "Donar a través de Easypaisa",
      easypaisaNote: "Envía mediante la aplicación Easypaisa o cuenta móvil.",
      email: "Correo de contacto:",
      thankyou: "Gracias por apoyar a Fymo Tools. Cada rupia cuenta. 🙏",
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700 animate-pulse">
        {content[language].title}
      </h1>

      <p className="text-center mb-6 text-gray-600">{content[language].message}</p>

      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">📱 {content[language].jazzcash}</h2>
          <p className="mt-2 text-gray-700">
            Number: <span className="font-medium">+92 302 7129449</span>
            <button
              onClick={() => copyToClipboard("+92 302 7129449", "JazzCash")}
              className="ml-2 text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </p>
          <p className="text-gray-500 text-sm">{content[language].jazzcashNote}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">💸 {content[language].easypaisa}</h2>
          <p className="mt-2 text-gray-700">
            Number: <span className="font-medium">923448292001</span>
            <button
              onClick={() => copyToClipboard("923448292001", "Easypaisa")}
              className="ml-2 text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </p>
          <p className="text-gray-500 text-sm">{content[language].easypaisaNote}</p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-md text-gray-700">📩 {content[language].email}</h2>
          <p className="text-indigo-600 font-medium">
            fymotools@gmail.com
            <button
              onClick={() => copyToClipboard("fymotools@gmail.com", "Email")}
              className="ml-2 text-sm text-blue-600 hover:underline"
            >
              Copy
            </button>
          </p>
        </div>
      </div>

      {copied && (
        <div className="text-center mt-4 text-green-600 font-medium animate-bounce">
          {copied} copied to clipboard ✅
        </div>
      )}

      <p className="text-center mt-8 text-sm text-gray-500">
        {content[language].thankyou}
      </p>
    </div>
  );
};

export default Donate;
