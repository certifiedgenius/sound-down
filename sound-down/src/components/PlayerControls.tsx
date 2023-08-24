// components/PlayerControls.tsx
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const PlayerControls: React.FC = () => {
  const { 
    play, 
    pause, 
    next, 
    previous
   } = useMusicPlayer();

  return (
    <div className="player-controls">
      <button onClick={previous}>Previous</button>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default PlayerControls;
