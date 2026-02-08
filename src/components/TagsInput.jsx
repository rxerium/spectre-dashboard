import { useState } from 'react';
import { X, Plus } from 'lucide-react';

const TagsInput = ({ tags = [], onTagsChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      onTagsChange([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onTagsChange(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="scan-card">
      <h3 className="text-xs text-gray-500 font-bold mb-3">TAGS</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-glow/20 text-purple-glow rounded-full text-sm border border-purple-glow/30"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)}
              className="hover:text-pink-critical transition-colors"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add tag..."
          className="flex-1 bg-space-black/50 border border-purple-glow/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-glow transition-colors"
        />
        <button
          onClick={handleAddTag}
          className="p-2 bg-purple-glow/20 hover:bg-purple-glow/30 text-purple-glow rounded-lg transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default TagsInput;
