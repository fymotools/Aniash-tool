import React, { useState } from 'react';

function MetaDescriptionGenerator() {
  const [keyword, setKeyword] = useState('');
  const [description, setDescription] = useState('');

  const generateDescription = () => {
    if (!keyword.trim()) return;

    const generated = `Discover everything you need to know about ${keyword.toLowerCase()} in this concise, informative guide. Boost your SEO and attract more clicks today!`;

    setDescription(generated);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">SEO Meta Description Generator</h2>

      <input
        type="text"
        placeholder="Enter a keyword or topic"
        className="w-full border p-2 rounded mb-3"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button
        onClick={generateDescription}
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Generate Description
      </button>

      {description && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-sm">
          <strong>Meta Description:</strong>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default MetaDescriptionGenerator;
