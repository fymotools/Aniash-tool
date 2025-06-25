import React, { useState } from 'react';

function WaterIntakeCalculator() {
  const [weight, setWeight] = useState('');
  const [intake, setIntake] = useState(null);

  const calculateIntake = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return;

    const litres = w * 0.033;
    setIntake(litres.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Water Intake Calculator</h2>

      <input
        type="number"
        placeholder="Your Weight in kg"
        className="w-full border p-2 rounded mb-3"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button
        onClick={calculateIntake}
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>

      {intake && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Recommended: {intake} litres/day</p>
        </div>
      )}
    </div>
  );
}

export default WaterIntakeCalculator;
