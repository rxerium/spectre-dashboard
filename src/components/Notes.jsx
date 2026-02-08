import { useState } from 'react';

const Notes = ({ notes = '', onNotesChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localNotes, setLocalNotes] = useState(notes);

  const handleBlur = () => {
    setIsEditing(false);
    onNotesChange(localNotes);
  };

  return (
    <div className="scan-card">
      <h3 className="text-xs text-gray-500 font-bold mb-3">NOTES</h3>
      {isEditing ? (
        <textarea
          value={localNotes}
          onChange={(e) => setLocalNotes(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="w-full h-32 bg-space-black/50 border border-purple-glow/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-glow transition-colors resize-none"
          placeholder="Click to add notes..."
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="w-full h-32 bg-space-black/50 border border-purple-glow/20 rounded-lg px-3 py-2 text-sm text-gray-400 cursor-text hover:border-cyan-glow/30 transition-colors overflow-auto"
        >
          {localNotes || 'Click to add notes...'}
        </div>
      )}
    </div>
  );
};

export default Notes;
