import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState('');

  const calculateAge = () => {
    if (!birthdate) return;

    const birth = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(`You are ${years} years, ${months} months, and ${days} days old.`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Age Calculator</h2>

      <input
        type="date"
        className="border p-2 rounded w-full mb-3"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <button
        onClick={calculateAge}
        className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
      >
        Calculate Age
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-center text-sm font-medium">
          {result}
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
