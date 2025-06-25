import React, { useState } from 'react';

function BMRCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!h || !w || !a) return;

    let result = 0;
    if (gender === 'male') {
      result = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
    } else {
      result = 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
    }

    setBmr(result.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">BMR Calculator</h2>

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

      <input type="number" placeholder="Age (years)" className="w-full border p-2 rounded mb-2" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="number" placeholder="Height (cm)" className="w-full border p-2 rounded mb-2" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" placeholder="Weight (kg)" className="w-full border p-2 rounded mb-2" value={weight} onChange={(e) => setWeight(e.target.value)} />

      <button onClick={calculateBMR} className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
        Calculate
      </button>

      {bmr && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Your BMR: {bmr} kcal/day</p>
        </div>
      )}
    </div>
  );
}

export default BMRCalculator;
