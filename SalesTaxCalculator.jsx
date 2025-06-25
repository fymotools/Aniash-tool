import React, { useState } from 'react';

function SalesTaxCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [tax, setTax] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTax = () => {
    const amt = parseFloat(amount);
    const taxRate = parseFloat(rate);

    if (!amt || !taxRate) return;

    const taxAmount = (amt * taxRate) / 100;
    const totalAmount = amt + taxAmount;

    setTax(taxAmount.toFixed(2));
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Sales Tax Calculator</h2>

      <input
        type="number"
        placeholder="Enter amount"
        className="w-full border p-2 rounded mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter tax rate (%)"
        className="w-full border p-2 rounded mb-3"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />

      <button
        onClick={calculateTax}
        className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700"
      >
        Calculate Sales Tax
      </button>

      {tax !== null && (
        <div className="mt-4 text-center">
          <p>Sales Tax: ₹ {tax}</p>
          <p>Total Amount: ₹ {total}</p>
        </div>
      )}
    </div>
  );
}

export default SalesTaxCalculator;
