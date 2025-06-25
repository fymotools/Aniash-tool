import React, { useState } from 'react';

function IncomeTaxCalculator() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const inc = parseFloat(income);
    if (!inc || inc < 0) return;

    let taxAmount = 0;

    // Simple Example Slabs (customize for your country if needed)
    if (inc <= 250000) {
      taxAmount = 0;
    } else if (inc <= 500000) {
      taxAmount = (inc - 250000) * 0.05;
    } else if (inc <= 1000000) {
      taxAmount = (250000 * 0.05) + (inc - 500000) * 0.2;
    } else {
      taxAmount = (250000 * 0.05) + (500000 * 0.2) + (inc - 1000000) * 0.3;
    }

    setTax(taxAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Income Tax Calculator</h2>

      <input
        type="number"
        placeholder="Enter your annual income (PKR)"
        className="w-full border p-2 rounded mb-3"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      <button
        onClick={calculateTax}
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Calculate Tax
      </button>

      {tax !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Estimated Tax: PKR {tax}</p>
        </div>
      )}
    </div>
  );
}

export default IncomeTaxCalculator;
