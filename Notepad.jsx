import React, { useState, useEffect } from 'react';

function Notepad() {
  const [note, setNote] = useState('');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fymo_note');
    if (saved) setNote(saved);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('fymo_note', note);
  }, [note]);

  const clearNote = () => {
    if (window.confirm('Are you sure you want to clear the note?')) {
      setNote('');
      localStorage.removeItem('fymo_note');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Notepad</h2>

      <textarea
        rows="10"
        className="w-full border rounded p-3 text-sm"
        placeholder="Write your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={clearNote}
        className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Clear Notes
      </button>
    </div>
  );
}

export default Notepad;
