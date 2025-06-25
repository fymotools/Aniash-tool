// src/components/tools/BMICalculator.jsx
import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const result = w / (h * h);
    setBmi(result.toFixed(2));

    if (result < 18.5) setStatus('Underweight');
    else if (result < 25) setStatus('Normal');
    else if (result < 30) setStatus('Overweight');
    else setStatus('Obese');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>

      <input
        type="number"
        placeholder="Height in cm"
        className="w-full border p-2 rounded mb-3"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight in kg"
        className="w-full border p-2 rounded mb-3"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button
        onClick={calculateBMI}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Calculate
      </button>

      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold">Your BMI: {bmi}</p>
          <p className="text-gray-600">Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
