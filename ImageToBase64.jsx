import React, { useState } from 'react';

function ImageToBase64() {
  const [base64, setBase64] = useState('');
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64);
    alert('Base64 copied to clipboard!');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Image to Base64 Converter</h2>

      <input
        type="file"
        accept="image/*"
        className="mb-3"
        onChange={handleImage}
      />

      {preview && (
        <div className="mb-3">
          <p className="font-semibold mb-1">Preview:</p>
          <img src={preview} alt="Preview" className="max-w-xs rounded" />
        </div>
      )}

      {base64 && (
        <div className="mb-3">
          <p className="font-semibold mb-1">Base64 Output:</p>
          <textarea
            className="w-full p-2 border rounded text-sm"
            rows="6"
            value={base64}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Copy Base64
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageToBase64;
