import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">About Fymo Tools</h1>

      <p className="text-gray-700 mb-6 text-center">
        Fymo Tools is a free, modern, and user-friendly platform offering 30+ everyday utilities across 6 categories —
        all powered by clean frontend technology and designed to be accessible to everyone.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎯 Our Mission</h2>
          <p className="text-gray-700">
            We aim to provide free tools for productivity, learning, and creativity — without any signups, logins, or distractions.
            Whether you're calculating your BMI or generating a blog post, Fymo is here to help.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🧰 Tools We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Tax Tools (Income Tax, GST...)</li>
            <li>Health Tools (BMI, Calorie, etc.)</li>
            <li>Writing & SEO Tools (Meta, Blog)</li>
            <li>Image Tools (Compress, Convert)</li>
            <li>Daily Utilities (Age, Loan, Notepad)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border col-span-full">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">💡 Why Fymo is Different?</h2>
          <p className="text-gray-700">
            Fymo is lightweight, fast, and 100% free. Built using ReactJS + TailwindCSS, it works smoothly on both desktop and mobile.
            We do not collect data, and we believe in open-access tools for all users worldwide.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border col-span-full text-center">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">👤 Created by:</h2>
          <p className="text-gray-700 font-medium">Emmanueil Masih</p>
          <p className="text-sm text-gray-500">Email: fymotools@gmail.com</p>
          <p className="text-sm text-gray-500">Location: Pakistan</p>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-500">
        Made with ❤️ for everyone, by Fymo Team.
      </p>
    </div>
  );
};

export default About;
