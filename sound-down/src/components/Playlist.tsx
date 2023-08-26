import React, { useContext, useState } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

interface TrackInfo {
  id: string;
  title: string;
  artist: string;
  url: string;
}

const PlaylistComponent: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);

  const [selectedPlaylist, setSelectedPlaylist] = useState<TrackInfo[] | null>(null);

  if (!musicPlayerContext) {
    return null;
  }

  const handleDownload = (trackUrl: string, trackTitle: string) => {
    const link = document.createElement('a');
    link.href = trackUrl;
    link.download = `${trackTitle}.mp3`;
    link.click();
  };

  return (
    <div className="playlist">
      {selectedPlaylist && (
        <div>
    
          <ul>
            {selectedPlaylist.map((track: TrackInfo) => (
              <li key={track.id}>
                {track.title} - {track.artist}
                <button onClick={() => handleDownload(track.url, track.title)}>
                  Download
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaylistComponent;
