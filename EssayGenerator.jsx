import React, { useState } from 'react';

function EssayGenerator() {
  const [topic, setTopic] = useState('');
  const [essay, setEssay] = useState('');

  const generateEssay = () => {
    if (!topic.trim()) return;

    const lowerTopic = topic.toLowerCase();

    const dummyEssay = `
      Title: The Importance of ${topic}

      Introduction:
      In the modern world, ${lowerTopic} has become an essential aspect of life. Whether in education, business, or society, the influence of ${lowerTopic} is evident everywhere.

      Body:
      ${topic} provides a foundation for personal and professional growth. It helps individuals understand complex situations and promotes better decision-making. Moreover, ${lowerTopic} enables innovation, inspires creativity, and enhances problem-solving abilities.

      Conclusion:
      In conclusion, ${topic} is not just a concept but a necessity. Embracing and understanding ${lowerTopic} can lead to a brighter, more informed, and empowered future.
    `;

    setEssay(dummyEssay);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Essay Generator</h2>

      <input
        type="text"
        placeholder="Enter essay topic"
        className="w-full border p-2 rounded mb-3"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generateEssay}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Generate Essay
      </button>

      {essay && (
        <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
          {essay}
        </div>
      )}
    </div>
  );
}

export default EssayGenerator;
