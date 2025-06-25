import React, { useState } from 'react';

function KeywordDensityChecker() {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [density, setDensity] = useState(null);

  const calculateDensity = () => {
    if (!text.trim() || !keyword.trim()) return;

    const words = text.toLowerCase().split(/\s+/).filter(Boolean);
    const totalWords = words.length;
    const keywordCount = words.filter(word => word === keyword.toLowerCase()).length;
    const percentage = ((keywordCount / totalWords) * 100).toFixed(2);

    setDensity({
      totalWords,
      keywordCount,
      percentage,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Keyword Density Checker</h2>

      <textarea
        rows="4"
        placeholder="Paste your paragraph here..."
        className="w-full border p-2 rounded mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter keyword to check"
        className="w-full border p-2 rounded mb-3"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button
        onClick={calculateDensity}
        className="bg-emerald-600 text-white w-full py-2 rounded hover:bg-emerald-700"
      >
        Calculate Density
      </button>

      {density && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-sm">
          <p><strong>Total Words:</strong> {density.totalWords}</p>
          <p><strong>Keyword Count:</strong> {density.keywordCount}</p>
          <p><strong>Keyword Density:</strong> {density.percentage}%</p>
        </div>
      )}
    </div>
  );
}

export default KeywordDensityChecker;
