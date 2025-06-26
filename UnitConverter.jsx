import React, { useState } from 'react';

const unitOptions = {
  length: ['Meter', 'Kilometer', 'Centimeter', 'Inch', 'Foot'],
  weight: ['Gram', 'Kilogram', 'Pound', 'Ounce'],
  temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
};

const conversionFunctions = {
  length: {
    Meter: { Meter: 1, Kilometer: 0.001, Centimeter: 100, Inch: 39.37, Foot: 3.281 },
    Kilometer: { Meter: 1000, Kilometer: 1, Centimeter: 100000, Inch: 39370, Foot: 3281 },
    Centimeter: { Meter: 0.01, Kilometer: 0.00001, Centimeter: 1, Inch: 0.3937, Foot: 0.03281 },
    Inch: { Meter: 0.0254, Kilometer: 0.0000254, Centimeter: 2.54, Inch: 1, Foot: 0.08333 },
    Foot: { Meter: 0.3048, Kilometer: 0.0003048, Centimeter: 30.48, Inch: 12, Foot: 1 },
  },
  weight: {
    Gram: { Gram: 1, Kilogram: 0.001, Pound: 0.00220462, Ounce: 0.035274 },
    Kilogram: { Gram: 1000, Kilogram: 1, Pound: 2.20462, Ounce: 35.274 },
    Pound: { Gram: 453.592, Kilogram: 0.453592, Pound: 1, Ounce: 16 },
    Ounce: { Gram: 28.3495, Kilogram: 0.02835, Pound: 0.0625, Ounce: 1 },
  },
  temperature: (from, to, value) => {
    value = parseFloat(value);
    if (from === to) return value;
    if (from === 'Celsius') {
      if (to === 'Fahrenheit') return (value * 9) / 5 + 32;
      if (to === 'Kelvin') return value + 273.15;
    }
    if (from === 'Fahrenheit') {
      if (to === 'Celsius') return ((value - 32) * 5) / 9;
      if (to === 'Kelvin') return ((value - 32) * 5) / 9 + 273.15;
    }
    if (from === 'Kelvin') {
      if (to === 'Celsius') return value - 273.15;
      if (to === 'Fahrenheit') return ((value - 273.15) * 9) / 5 + 32;
    }
    return value;
  },
};

function UnitConverter() {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('Meter');
  const [toUnit, setToUnit] = useState('Kilometer');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleConvert = () => {
    if (!inputValue) return;

    let result;
    if (category === 'temperature') {
      result = conversionFunctions.temperature(fromUnit, toUnit, inputValue);
    } else {
      const factor = conversionFunctions[category][fromUnit][toUnit];
      result = parseFloat(inputValue) * factor;
    }

    setConvertedValue(result.toFixed(4));
  };

  const units = unitOptions[category];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Unit Converter</h2>

      <div className="mb-3">
        <label className="block font-semibold mb-1">Category</label>
        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setFromUnit(unitOptions[e.target.value][0]);
            setToUnit(unitOptions[e.target.value][1]);
            setInputValue('');
            setConvertedValue('');
          }}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <label className="block font-semibold mb-1">From</label>
          <select
            className="w-full p-2 border rounded"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">To</label>
          <select
            className="w-full p-2 border rounded"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <input
        type="number"
        placeholder="Enter value"
        className="w-full p-2 border rounded mb-3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={handleConvert}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Convert
      </button>

      {convertedValue && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-center font-semibold">
          Result: {convertedValue} {toUnit}
        </div>
      )}
    </div>
  );
}

export default UnitConverter;
