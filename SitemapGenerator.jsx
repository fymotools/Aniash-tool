import React, { useState } from 'react';

function SitemapGenerator() {
  const [urls, setUrls] = useState('');
  const [sitemap, setSitemap] = useState('');

  const generateSitemap = () => {
    if (!urls.trim()) return;

    const urlList = urls.split('\n').map(url => url.trim()).filter(Boolean);

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      urlList
        .map(
          url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
        )
        .join('\n') +
      `\n</urlset>`;

    setSitemap(sitemapXML);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">XML Sitemap Generator</h2>

      <textarea
        rows="5"
        placeholder="Enter one URL per line..."
        className="w-full border p-2 rounded mb-3"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />

      <button
        onClick={generateSitemap}
        className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700"
      >
        Generate Sitemap
      </button>

      {sitemap && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap overflow-auto max-h-96">
          {sitemap}
        </div>
      )}
    </div>
  );
}

export default SitemapGenerator;
