// components/PlayerControls.tsx
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const PlayerControls: React.FC = () => {
  const { 
    play, 
    pause, 
    next, 
    previous,
    currentTrack,
    isPlaying
   } = useMusicPlayer();

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else if (currentTrack) {
      play(currentTrack);
    }
  };

  return (
    <div className="player-controls">
      <button onClick={previous}>Previous</button>
      {currentTrack ? (
        <>
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio controls src={currentTrack.url}></audio>
          <button onClick={next}>Next</button>
        </>
      ) : (
        <button disabled>Play</button>
      )}
    </div>
  );
};

export default PlayerControls;
