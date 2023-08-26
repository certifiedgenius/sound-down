// components/TrackList.tsx
import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';
import TrackListView from '../views/TrackListView'; // Make sure to import the correct path to the view component

const TrackList: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);

  if (!musicPlayerContext) {
    return null; // Handle the case when context is not available
  }

  const { currentPlaylist, play } = musicPlayerContext;

  return (
    <div className="track-list">
      <h2>{currentPlaylist?.name}</h2>
      <TrackListView tracks={currentPlaylist?.tracks || []} /> {/* Provide an empty array as fallback */}
      <ul>
        {currentPlaylist?.tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => musicPlayerContext.play(track)}>Play</button>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;

