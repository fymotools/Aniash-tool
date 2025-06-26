import React, { useState, useRef } from 'react';

function ScreenRecorder() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert('Error starting screen recording: ' + err.message);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Screen Recorder</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={startRecording}
          disabled={recording}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!recording}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
        >
          Stop Recording
        </button>
      </div>

      {videoURL && (
        <div className="mt-4">
          <video src={videoURL} controls className="w-full max-w-md mb-2 rounded" />
          <a
            href={videoURL}
            download="recorded-video.webm"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}

export default ScreenRecorder;
