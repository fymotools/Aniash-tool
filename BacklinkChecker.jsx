import React, { useState } from 'react';

function BacklinkChecker() {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState([]);

  const checkBacklinks = () => {
    if (!domain.trim()) return;

    // Dummy backlinks (you can integrate real API later)
    const dummyLinks = [
      `https://example.com/articles/${domain}`,
      `https://blogsite.net/posts/${domain}`,
      `https://directory.org/link/${domain}`,
      `https://${domain}/referral`,
    ];

    setResults(dummyLinks);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Backlink Checker (Demo)</h2>

      <input
        type="text"
        placeholder="Enter your domain (e.g. example.com)"
        className="w-full border p-2 rounded mb-3"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />

      <button
        onClick={checkBacklinks}
        className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700"
      >
        Check Backlinks
      </button>

      {results.length > 0 && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-sm">
          <p className="font-semibold mb-2">Found {results.length} backlinks:</p>
          <ul className="list-disc list-inside">
            {results.map((link, i) => (
              <li key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BacklinkChecker;
