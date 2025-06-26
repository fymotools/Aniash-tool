import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-lg border">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold mb-2">📧 Email us directly:</h2>
        <p className="text-indigo-600 font-medium">fymotools@gmail.com</p>
      </div>

      <div className="mt-8 flex justify-center space-x-6 text-gray-600 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶️</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
      </div>
    </div>
  );
};

export default Contact;
