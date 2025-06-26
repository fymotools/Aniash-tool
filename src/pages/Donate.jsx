// src/pages/Donate.jsx

import React from "react";

const Donate = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">Support Fymo Tools 💖</h1>
      <p className="text-center mb-6 text-gray-600">
        If you find our free tools helpful, consider supporting us. Your donation helps keep this platform running and 100% free for everyone.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">📱 Donate via JazzCash</h2>
          <p className="mt-2 text-gray-700">Number: <span className="font-medium">+92 302 7129449</span></p>
          <p className="text-gray-500 text-sm">Use mobile transfer or QR in your JazzCash app.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">💸 Donate via Easypaisa</h2>
          <p className="mt-2 text-gray-700">Number: <span className="font-medium">923448292001</span></p>
          <p className="text-gray-500 text-sm">Send via Easypaisa app or mobile account.</p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-md text-gray-700">📩 Contact Email:</h2>
          <p className="text-indigo-600 font-medium">fymotools@gmail.com</p>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-500">
        Thank you for supporting Fymo Tools. Every rupee counts. 🙏
      </p>
    </div>
  );
};

export default Donate;
