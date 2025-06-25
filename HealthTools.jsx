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
