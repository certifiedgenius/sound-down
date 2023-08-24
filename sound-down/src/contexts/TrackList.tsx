// components/TrackList.tsx
import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

const TrackList: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);
  const { currentPlaylist, play } = musicPlayerContext;

  return (
    <div className="track-list">
      <h2>{currentPlaylist.name}</h2>
      <ul>
        {currentPlaylist.tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => play(track)}>Play</button>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
