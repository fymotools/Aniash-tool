import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBmiCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setBmiCategory('Overweight');
      } else {
        setBmiCategory('Obesity');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <Helmet>
        <title>BMI Calculator - Fymo Tools</title>
        <meta name="description" content="Free online BMI calculator to check your body mass index" />
      </Helmet>
      
      <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter height in cm"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight in kg"
          />
        </div>
        
        <button
          onClick={calculateBmi}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate BMI
        </button>
        
        {bmi && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Your Results</h3>
            <p className="text-gray-700">BMI: <span className="font-bold">{bmi}</span></p>
            <p className="text-gray-700">Category: <span className="font-bold">{bmiCategory}</span></p>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">BMI Categories:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Underweight: BMI less than 18.5</li>
                <li>Normal weight: BMI 18.5 to 24.9</li>
                <li>Overweight: BMI 25 to 29.9</li>
                <li>Obesity: BMI 30 or greater</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
