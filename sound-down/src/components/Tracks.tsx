import React, { useEffect, useState } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

interface TracksProps {
  accessToken: string | null;
}

const Tracks: React.FC<TracksProps> = ({ accessToken }) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [localTracks, setLocalTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async (playlistId: string) => {
      if (!accessToken) {
        return;
      }

      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      const formattedTracks = data.items.map((item: any) => ({
        id: item.track.id,
        title: item.track.name,
        artist: item.track.artists.map((artist: any) => artist.name).join(', '),
        url: item.track.preview_url,
      }));
      setLocalTracks(formattedTracks); // Store fetched tracks in local state
    };

    if (selectedPlaylistId) {
      fetchTracks(selectedPlaylistId);
    }
  }, [accessToken, selectedPlaylistId]);

  return (
    <div>
      <h2>Tracks</h2>
      <ul>
        {localTracks.map((track) => (
          <li key={track.id}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
