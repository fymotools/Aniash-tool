import React, { useState } from 'react';

function PropertyTaxCalculator() {
  const [propertyValue, setPropertyValue] = useState('');
  const [taxRate, setTaxRate] = useState(1.0); // default 1%
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const value = parseFloat(propertyValue);
    const rate = parseFloat(taxRate);

    if (!value || !rate) return;

    const taxAmount = (value * rate) / 100;
    setTax(taxAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Property Tax Estimator</h2>

      <input
        type="number"
        placeholder="Enter property value"
        className="w-full border p-2 rounded mb-2"
        value={propertyValue}
        onChange={(e) => setPropertyValue(e.target.value)}
      />

      <input
        type="number"
        placeholder="Tax rate (%)"
        className="w-full border p-2 rounded mb-3"
        value={taxRate}
        onChange={(e) => setTaxRate(e.target.value)}
      />

      <button
        onClick={calculateTax}
        className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700"
      >
        Estimate Tax
      </button>

      {tax && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Estimated Property Tax: ₹ {tax}</p>
        </div>
      )}
    </div>
  );
}

export default PropertyTaxCalculator;
