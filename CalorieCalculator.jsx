import React, { useState } from 'react';

function CalorieCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!h || !w || !a) return;

    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
    } else {
      bmr = 447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a);
    }

    const result = bmr * parseFloat(activity);
    setCalories(result.toFixed(0));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Calorie Calculator</h2>

      {/* Gender selection */}
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

      {/* Inputs */}
      <input type="number" placeholder="Age (years)" className="w-full border p-2 rounded mb-2" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="number" placeholder="Height (cm)" className="w-full border p-2 rounded mb-2" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="number" placeholder="Weight (kg)" className="w-full border p-2 rounded mb-2" value={weight} onChange={(e) => setWeight(e.target.value)} />

      {/* Activity Level Dropdown */}
      <select
        className="w-full border p-2 rounded mb-3"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      >
        <option value="1.2">Sedentary (little or no exercise)</option>
        <option value="1.375">Lightly active (1–3 days/week)</option>
        <option value="1.55">Moderately active (3–5 days/week)</option>
        <option value="1.725">Very active (6–7 days/week)</option>
        <option value="1.9">Extra active (hard daily training)</option>
      </select>

      <button
        onClick={calculateCalories}
        className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
      >
        Calculate
      </button>

      {calories && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Estimated Daily Calories: {calories} kcal</p>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;
