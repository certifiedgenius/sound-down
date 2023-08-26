import React, { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

interface Playlist {
  id: string;
  name: string;
  tracks: TrackInfo[];
}

interface TrackInfo {
  id: string;
  title: string;
  artist: string;
  url: string;
}

const PlaylistComponent: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);

  if (!musicPlayerContext) {
    return null;
  }

  const { setCurrentPlaylist } = musicPlayerContext;

  return (
    <div className="playlist">
      <h2>Playlists</h2>
      {/* Replace the following part with your desired content */}
      <p>This is where your playlist content should be rendered.</p>
    </div>
  );
};

export default PlaylistComponent;
