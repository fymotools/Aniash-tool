import React, { useState } from 'react';

function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const time = parseFloat(years);

    if (!principal || !annualRate || !time) return;

    const monthlyRate = annualRate / 12 / 100;
    const months = time * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiCalc.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Loan EMI Calculator</h2>

      <input
        type="number"
        placeholder="Loan Amount"
        className="w-full p-2 border rounded mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        className="w-full p-2 border rounded mb-3"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Loan Tenure (Years)"
        className="w-full p-2 border rounded mb-3"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />

      <button
        onClick={calculateEMI}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Calculate EMI
      </button>

      {emi && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-center text-lg font-semibold">
          Monthly EMI: ₹{emi}
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
