import React, { useState } from 'react';

function BlogTitleGenerator() {
  const [keyword, setKeyword] = useState('');
  const [titles, setTitles] = useState([]);

  const generateTitles = () => {
    if (!keyword.trim()) return;

    const keywordLower = keyword.toLowerCase();

    const dummyTitles = [
      `10 Powerful Tips About ${keywordLower}`,
      `Why ${keywordLower} Is More Relevant Than Ever`,
      `Beginner’s Guide to ${keywordLower}`,
      `How to Master ${keywordLower} in 7 Days`,
      `The Future of ${keywordLower}: What You Need to Know`,
    ];

    setTitles(dummyTitles);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Blog Title Generator</h2>

      <input
        type="text"
        placeholder="Enter a keyword"
        className="w-full border p-2 rounded mb-3"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button
        onClick={generateTitles}
        className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700"
      >
        Generate Titles
      </button>

      {titles.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogTitleGenerator;
