import React, { useState } from 'react';

function IdealWeightCalculator() {
  const [gender, setGender] = useState('male');
  const [heightCm, setHeightCm] = useState('');
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateIdealWeight = () => {
    const cm = parseFloat(heightCm);
    if (!cm || cm < 100) return;

    const inches = cm / 2.54;
    let weight;

    if (gender === 'male') {
      weight = 50 + 2.3 * (inches - 60);
    } else {
      weight = 45.5 + 2.3 * (inches - 60);
    }

    setIdealWeight(weight.toFixed(1));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Ideal Weight Calculator</h2>

      <div className="flex space-x-4 mb-3">
        <label>
          <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
          <span className="ml-1">Male</span>
        </label>
        <label>
          <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
          <span className="ml-1">Female</span>
        </label>
      </div>

      <input
        type="number"
        placeholder="Height in cm"
        className="w-full border p-2 rounded mb-2"
        value={heightCm}
        onChange={(e) => setHeightCm(e.target.value)}
      />

      <button
        onClick={calculateIdealWeight}
        className="bg-indigo-500 text-white w-full py-2 rounded hover:bg-indigo-600"
      >
        Calculate
      </button>

      {idealWeight && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Ideal Weight: {idealWeight} kg</p>
        </div>
      )}
    </div>
  );
}

export default IdealWeightCalculator;
