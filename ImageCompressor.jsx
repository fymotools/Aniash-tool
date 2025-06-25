import React, { useState } from 'react';

function ImageCompressor() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedURL, setCompressedURL] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOriginalImage(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const compressed = canvas.toDataURL('image/jpeg', 0.5); // 50% quality
        setCompressedURL(compressed);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Image Compressor</h2>

      <input
        type="file"
        accept="image/*"
        className="mb-3"
        onChange={handleImageUpload}
      />

      {originalImage && (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Original Image:</p>
            <img src={originalImage} alt="Original" className="max-w-xs rounded" />
          </div>

          <div>
            <p className="font-semibold">Compressed Image (50% quality):</p>
            <img src={compressedURL} alt="Compressed" className="max-w-xs rounded" />
            <a
              href={compressedURL}
              download="compressed.jpg"
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download Compressed Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCompressor;
