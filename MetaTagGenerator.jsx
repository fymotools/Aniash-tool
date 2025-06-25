import React, { useState } from 'react';

function MetaTagGenerator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [metaTags, setMetaTags] = useState('');

  const generateMetaTags = () => {
    if (!title.trim() || !description.trim() || !keywords.trim()) return;

    const tags = `
<meta name="title" content="${title}" />
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta name="twitter:card" content="summary_large_image" />
    `.trim();

    setMetaTags(tags);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Meta Tag Generator</h2>

      <input
        type="text"
        placeholder="Enter page title"
        className="w-full border p-2 rounded mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter description"
        className="w-full border p-2 rounded mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter keywords (comma separated)"
        className="w-full border p-2 rounded mb-3"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />

      <button
        onClick={generateMetaTags}
        className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
      >
        Generate Meta Tags
      </button>

      {metaTags && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          {metaTags}
        </div>
      )}
    </div>
  );
}

export default MetaTagGenerator;
