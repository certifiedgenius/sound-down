import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

const Player: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);

  if (!musicPlayerContext) {
    return null;
  }

  const {
    currentTrack,
    play,
    pause,
    isPlaying,
    next,
    previous,
  } = musicPlayerContext;

  const handlePlayPause = () => {
    if (currentTrack) {
      if (isPlaying) {
        pause();
      } else {
        play(currentTrack);
      }
    }
  };

  return (
    <div className="player">
      <div className="controls">
        <button onClick={previous}>Previous</button>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Player;
