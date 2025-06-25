import React, { useState } from 'react';

function GrayscaleImageFilter() {
  const [imageURL, setImageURL] = useState(null);
  const [grayscale, setGrayscale] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageURL(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Grayscale Image Filter</h2>

      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={handleUpload}
      />

      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={grayscale}
            onChange={() => setGrayscale(!grayscale)}
          />
          <span>Apply Grayscale Filter</span>
        </label>
      </div>

      {imageURL && (
        <img
          src={imageURL}
          alt="Filtered"
          className={`max-w-xs rounded ${grayscale ? 'grayscale' : ''}`}
        />
      )}
    </div>
  );
}

export default GrayscaleImageFilter;
