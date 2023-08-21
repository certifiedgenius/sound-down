// components/Playlist.tsx
import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

const Playlist: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);
  
  if (!musicPlayerContext) {
    return null; // Handle the case when context is not available
  }
  
  const { playlists, setCurrentPlaylist } = musicPlayerContext;

  return (
    <div className="playlist">
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} onClick={() => setCurrentPlaylist(playlist)}>
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
