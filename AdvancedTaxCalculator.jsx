import React, { useState } from 'react';

function AdvancedTaxCalculator() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateAdvancedTax = () => {
    const inc = parseFloat(income);
    if (!inc || inc <= 0) return;

    let taxAmount = 0;

    // Example Slabs (customize as per your country)
    const slabs = [
      { limit: 250000, rate: 0 },
      { limit: 500000, rate: 0.05 },
      { limit: 1000000, rate: 0.20 },
      { limit: Infinity, rate: 0.30 },
    ];

    let prevLimit = 0;

    for (let i = 0; i < slabs.length; i++) {
      const { limit, rate } = slabs[i];

      if (inc > limit) {
        taxAmount += (limit - prevLimit) * rate;
        prevLimit = limit;
      } else {
        taxAmount += (inc - prevLimit) * rate;
        break;
      }
    }

    setTax(taxAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Advanced Tax Calculator</h2>

      <input
        type="number"
        placeholder="Enter your annual income"
        className="w-full border p-2 rounded mb-3"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      <button
        onClick={calculateAdvancedTax}
        className="bg-amber-500 text-white w-full py-2 rounded hover:bg-amber-600"
      >
        Calculate Advanced Tax
      </button>

      {tax !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Estimated Tax: ₹ {tax}</p>
        </div>
      )}
    </div>
  );
}

export default AdvancedTaxCalculator;
