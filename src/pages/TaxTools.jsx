import React from 'react';
import ToolCard from '../components/ToolCard';
import { Helmet } from 'react-helmet';

const TaxTools = () => {
  const tools = [
    {
      title: "Income Tax Calculator",
      description: "Calculate your annual income tax based on your salary and deductions",
      icon: "tax",
      link: "/tax-tools/income-tax-calculator"
    },
    {
      title: "GST Calculator",
      description: "Calculate Goods and Services Tax for your products",
      icon: "tax",
      link: "/tax-tools/gst-calculator"
    },
    {
      title: "Sales Tax Calculator",
      description: "Compute sales tax for purchases in different states",
      icon: "tax",
      link: "/tax-tools/sales-tax-calculator"
    },
    {
      title: "Property Tax Estimator",
      description: "Estimate property taxes based on location and value",
      icon: "tax",
      link: "/tax-tools/property-tax-estimator"
    },
    {
      title: "Advanced Tax Calculator",
      description: "Comprehensive tax calculator with multiple income sources",
      icon: "tax",
      link: "/tax-tools/advanced-tax-calculator"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Tax Tools - Fymo Tools</title>
        <meta name="description" content="Free online tax calculators for income tax, GST, sales tax, and property tax" />
      </Helmet>
      
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Tax Tools</h1>
        <p className="text-center text-gray-600 mb-8">Free online calculators for all your tax needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard 
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxTools;
