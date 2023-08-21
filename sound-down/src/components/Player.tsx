// components/Player.tsx
import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';
import { TrackList } from '../contexts/TrackList';

const Player: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);
  const { currentTrack, isPlaying, play, pause, next, previous, shuffle, repeat } = musicPlayerContext;

  return (
    <div className="player">
      <audio src={currentTrack.url} controls autoPlay />
      <div className="controls">
        <button onClick={previous}>Previous</button>
        {isPlaying ? (
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
