// components/Player.tsx
import React, { useContext } from 'react';
import PlayerControls from '../components/PlayerControls';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';


const Player: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);
  
    if (!musicPlayerContext) {
    return null; // Handle the case when context is not available
  }
  
  const { 
    currentTrack, 
    play, 
    pause, 
    next, 
    previous, 
    shuffle, 
    repeat
   } = musicPlayerContext;

  return (
    <div className="player">
      <audio src={currentTrack?.url} controls autoPlay />
      <div className="controls">
        <button onClick={previous}>Previous</button>
        {currentTrack ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={play}>Play</button>
        )}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Player;
