import React, { useState } from 'react';

function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(18); // default GST rate
  const [mode, setMode] = useState('add'); // 'add' or 'remove'
  const [result, setResult] = useState(null);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (!amt || !rate) return;

    let gstAmount, total, base;

    if (mode === 'add') {
      gstAmount = (amt * rate) / 100;
      total = amt + gstAmount;
      setResult({
        gstAmount: gstAmount.toFixed(2),
        finalAmount: total.toFixed(2),
      });
    } else {
      base = amt / (1 + rate / 100);
      gstAmount = amt - base;
      setResult({
        gstAmount: gstAmount.toFixed(2),
        baseAmount: base.toFixed(2),
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">GST Calculator</h2>

      <input
        type="number"
        placeholder="Enter amount"
        className="w-full border p-2 rounded mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="GST rate (%)"
        className="w-full border p-2 rounded mb-2"
        value={gstRate}
        onChange={(e) => setGstRate(e.target.value)}
      />

      <div className="flex space-x-4 mb-3">
        <label>
          <input
            type="radio"
            value="add"
            checked={mode === 'add'}
            onChange={() => setMode('add')}
          />
          <span className="ml-1">Add GST</span>
        </label>
        <label>
          <input
            type="radio"
            value="remove"
            checked={mode === 'remove'}
            onChange={() => setMode('remove')}
          />
          <span className="ml-1">Remove GST</span>
        </label>
      </div>

      <button
        onClick={calculateGST}
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-4 text-center">
          {mode === 'add' ? (
            <>
              <p>GST Amount: ₹ {result.gstAmount}</p>
              <p>Total Amount: ₹ {result.finalAmount}</p>
            </>
          ) : (
            <>
              <p>Base Amount: ₹ {result.baseAmount}</p>
              <p>GST Amount: ₹ {result.gstAmount}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default GSTCalculator;
