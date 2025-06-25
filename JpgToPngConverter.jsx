import React, { useState } from 'react';

function JpgToPngConverter() {
  const [originalImage, setOriginalImage] = useState(null);
  const [pngImage, setPngImage] = useState('');

  const handleConvert = (e) => {
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

        const png = canvas.toDataURL('image/png'); // convert to PNG
        setPngImage(png);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">JPG to PNG Converter</h2>

      <input
        type="file"
        accept="image/jpeg"
        className="mb-3"
        onChange={handleConvert}
      />

      {originalImage && (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Original JPG Image:</p>
            <img src={originalImage} alt="JPG" className="max-w-xs rounded" />
          </div>

          <div>
            <p className="font-semibold">Converted PNG Image:</p>
            <img src={pngImage} alt="PNG" className="max-w-xs rounded" />
            <a
              href={pngImage}
              download="converted.png"
              className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Download PNG
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default JpgToPngConverter;
