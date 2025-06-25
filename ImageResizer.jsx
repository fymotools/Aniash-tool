import React, { useState } from 'react';

function ImageResizer() {
  const [originalImage, setOriginalImage] = useState(null);
  const [resizedImage, setResizedImage] = useState('');

  const handleResize = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOriginalImage(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width / 2;
        canvas.height = img.height / 2;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const resized = canvas.toDataURL('image/jpeg', 0.9); // good quality
        setResizedImage(resized);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Image Resizer (50%)</h2>

      <input
        type="file"
        accept="image/*"
        className="mb-3"
        onChange={handleResize}
      />

      {originalImage && (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Original Image:</p>
            <img src={originalImage} alt="Original" className="max-w-xs rounded" />
          </div>

          <div>
            <p className="font-semibold">Resized Image (50%):</p>
            <img src={resizedImage} alt="Resized" className="max-w-xs rounded" />
            <a
              href={resizedImage}
              download="resized.jpg"
              className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Resized Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageResizer;
