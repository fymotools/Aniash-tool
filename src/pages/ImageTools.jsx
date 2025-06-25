import React from 'react';
import ImageCompressor from '../components/tools/ImageCompressor';
import ImageResizer from '../components/tools/ImageResizer';
import JpgToPngConverter from '../components/tools/JpgToPngConverter';
import ImageToBase64 from '../components/tools/ImageToBase64';
import GrayscaleImageFilter from '../components/tools/GrayscaleImageFilter';


function ImageTools() {
  return (
    <div className="space-y-10 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">🖼️ Image Tools</h1>

      <ImageCompressor />
      <ImageResizer />
      <JpgToPngConverter />
      <ImageToBase64 />
      <GrayscaleImageFilter />
    
    </div>
  );
}

export default ImageTools;
