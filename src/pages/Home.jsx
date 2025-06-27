import React from 'react';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import { FaCalculator, FaHeartbeat, FaPenAlt, FaSearch, FaImage, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const categories = [
    {
      title: "Tax Tools",
      icon: <FaCalculator className="text-3xl text-blue-500" />,
      link: "/tax-tools",
      description: "Calculate taxes, GST, property tax and more",
      tools: ["Income Tax Calculator", "GST Calculator", "Sales Tax Calculator"]
    },
    {
      title: "Health Tools",
      icon: <FaHeartbeat className="text-3xl text-green-500" />,
      link: "/health-tools",
      description: "Health calculators for BMI, BMR, calories and more",
      tools: ["BMI Calculator", "BMR Calculator", "Calorie Calculator"]
    },
    {
      title: "Writing Tools",
      icon: <FaPenAlt className="text-3xl text-purple-500" />,
      link: "/writing-tools",
      description: "AI writing assistants and content generators",
      tools: ["Text-to-Article", "Blog Title Generator", "SEO Meta Generator"]
    },
    {
      title: "SEO Tools",
      icon: <FaSearch className="text-3xl text-orange-500" />,
      link: "/seo-tools",
      description: "Tools for search engine optimization",
      tools: ["Meta Tag Generator", "Keyword Checker", "Sitemap Generator"]
    },
    {
      title: "Image Tools",
      icon: <FaImage className="text-3xl text-red-500" />,
      link: "/image-tools",
      description: "Edit, compress and convert images online",
      tools: ["Image Compressor", "Background Remover", "Format Converter"]
    },
    {
      title: "Daily Tools",
      icon: <FaCalendarAlt className="text-3xl text-yellow-500" />,
      link: "/daily-tools",
      description: "Useful tools for everyday tasks",
      tools: ["Age Calculator", "Loan EMI Calculator", "Unit Converter"]
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Free Online Tools for Everyone</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fymo Tools provides a collection of free, easy-to-use web tools for taxes, health, writing, SEO, images, and daily tasks.
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tool Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="block">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="text-sm text-gray-500">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="mb-1">• {tool}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard 
            title="BMI Calculator" 
            description="Calculate your Body Mass Index"
            icon="health"
            link="/health-tools/bmi-calculator"
          />
          <ToolCard 
            title="Income Tax Calculator" 
            description="Estimate your income tax"
            icon="tax"
            link="/tax-tools/income-tax-calculator"
          />
          <ToolCard 
            title="Image Compressor" 
            description="Reduce image file size"
            icon="image"
            link="/image-tools/image-compressor"
          />
          <ToolCard 
            title="Blog Title Generator" 
            description="Create catchy blog titles"
            icon="writing"
            link="/writing-tools/blog-title-generator"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
