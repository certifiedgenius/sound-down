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
   
   
   const handlePlay = () => {
    const audioElement = document.querySelector('audio') as HTMLAudioElement | null;
    
    if (audioElement) {
      if (currentTrack && audioElement.paused) {
        play(currentTrack);
      } else {
        pause();
      }
    }
  };

  
  return (
    <div className="player">
      <audio src={currentTrack?.url} controls autoPlay />
      <div className="controls">
        <button onClick={previous}>Previous</button>
        {currentTrack ? (
          <button onClick={handlePlay}>Play</button>
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
        <button onClick={pause}>Pause</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Player;
