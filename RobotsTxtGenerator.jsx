import React, { useState } from 'react';

function RobotsTxtGenerator() {
  const [allowAll, setAllowAll] = useState(true);
  const [customPath, setCustomPath] = useState('');
  const [disallow, setDisallow] = useState(false);
  const [robotsTxt, setRobotsTxt] = useState('');

  const generateRobotsTxt = () => {
    let output = `User-agent: *\n`;

    if (allowAll && !disallow) {
      output += `Allow: /\n`;
    }

    if (disallow && customPath.trim()) {
      output += `Disallow: ${customPath.trim()}\n`;
    }

    output += `\nSitemap: https://www.example.com/sitemap.xml`;

    setRobotsTxt(output);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Robots.txt Generator</h2>

      <div className="flex items-center mb-3 gap-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={allowAll}
            onChange={() => setAllowAll(!allowAll)}
            className="mr-2"
          />
          Allow All Pages
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={disallow}
            onChange={() => setDisallow(!disallow)}
            className="mr-2"
          />
          Disallow Custom Path
        </label>
      </div>

      {disallow && (
        <input
          type="text"
          placeholder="Enter path to disallow (e.g. /admin)"
          className="w-full border p-2 rounded mb-3"
          value={customPath}
          onChange={(e) => setCustomPath(e.target.value)}
        />
      )}

      <button
        onClick={generateRobotsTxt}
        className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
      >
        Generate robots.txt
      </button>

      {robotsTxt && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          {robotsTxt}
        </div>
      )}
    </div>
  );
}

export default RobotsTxtGenerator;
