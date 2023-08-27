import React, { useState } from 'react';

interface SimplePlayerControlsProps {
  selectedFile: File | null;
}

const SimplePlayerControls: React.FC<SimplePlayerControlsProps> = ({ selectedFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <div className="player-controls">
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {selectedFile && (
        <audio controls src={URL.createObjectURL(selectedFile)} />
      )}
    </div>
  );
};

export default SimplePlayerControls;
