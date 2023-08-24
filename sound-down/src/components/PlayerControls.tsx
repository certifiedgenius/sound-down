// components/PlayerControls.tsx
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const PlayerControls: React.FC = () => {
  const { 
    play, 
    pause, 
    next, 
    previous,
    currentTrack
   } = useMusicPlayer();

  return (
    <div className="player-controls">
      <button onClick={previous}>Previous</button>
      {currentTrack ? (
        <button onClick={() => play(currentTrack)}>Play</button>
      ) : (
        <button disabled>Play</button>
      )}
      <button onClick={pause}>Pause</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default PlayerControls;
