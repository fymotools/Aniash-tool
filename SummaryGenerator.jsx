import React, { useState } from 'react';

function SummaryGenerator() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const generateSummary = () => {
    if (!text.trim()) return;

    const sentences = text.split('.').filter(s => s.trim().length > 10);
    const summaryText =
      sentences.length > 2
        ? `${sentences[0].trim()}. ${sentences[1].trim()}.`
        : text;

    setSummary(summaryText);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Summary Generator</h2>

      <textarea
        rows="5"
        placeholder="Paste a paragraph or article here..."
        className="w-full border p-2 rounded mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generateSummary}
        className="bg-yellow-600 text-white w-full py-2 rounded hover:bg-yellow-700"
      >
        Generate Summary
      </button>

      {summary && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-sm">
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SummaryGenerator;
