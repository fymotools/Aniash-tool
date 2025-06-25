import React, { useState } from 'react';

function TextToArticle() {
  const [topic, setTopic] = useState('');
  const [article, setArticle] = useState('');

  const generateArticle = () => {
    if (!topic.trim()) return;

    // Dummy article generation (placeholder style)
    const generated = `
      📌 Topic: ${topic}

      In today's fast-paced world, ${topic.toLowerCase()} plays a vital role in shaping our society.
      It has become a matter of discussion across various platforms, influencing both individuals and industries.
      Experts believe that understanding ${topic.toLowerCase()} can lead to innovation, awareness, and progress.

      In conclusion, ${topic.toLowerCase()} is not just a trend — it's a transformation that demands attention and exploration.
    `;

    setArticle(generated);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">AI Text to Article Generator</h2>

      <input
        type="text"
        placeholder="Enter a topic"
        className="w-full border p-2 rounded mb-3"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generateArticle}
        className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
      >
        Generate Article
      </button>

      {article && (
        <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
          {article}
        </div>
      )}
    </div>
  );
}

export default TextToArticle;
