import React, { useContext, useEffect, useState } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';
import { useAuth, LoginButton } from 'react-oauth2-login';
import axios from 'axios';

interface Playlist {
  id: string;
  name: string;
  tracks: TrackInfo[]; // Using a unique name for the track type
}

interface TrackInfo {
  id: string;
  title: string;
  artist: string;
  url: string;
}

const PlaylistComponent: React.FC = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);
  const auth = useAuth();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [tracks, setTracks] = useState<TrackInfo[]>([]);
  

  useEffect(() => {
    if (auth) {
      const fetchPlaylists = async () => {
        try {
          const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          });
          const fetchedPlaylists: Playlist[] = response.data.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            tracks: [], // Initialize with empty tracks array
          }));
          setPlaylists(fetchedPlaylists);
        } catch (error) {
          console.error('Error fetching playlists:', error);
        }
      };

      fetchPlaylists();
    }
  }, [auth]);
  
  const handlePlaylistClick = async (playlist: Playlist) => {
    setSelectedPlaylist(playlist);

    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      const fetchedTracks: TrackInfo[] = response.data.items.map((item: any) => ({
        id: item.track.id,
        title: item.track.name,
        artist: item.track.artists.map((artist: any) => artist.name).join(', '),
        url: item.track.preview_url,
      }));

      setTracks(fetchedTracks);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };
  
  

  if (!musicPlayerContext || !auth) {
    return null;
  }

  const { setCurrentPlaylist } = musicPlayerContext;

  return (
    <div className="playlist">
      <h2>Playlists</h2>
      {auth ? (
        <div>
          <ul>
            {playlists.map((playlist) => (
              <li key={playlist.id} onClick={() => handlePlaylistClick(playlist)}>
                {playlist.name}
              </li>
            ))}
          </ul>
          {selectedPlaylist && (
            <div>
              <h3>Tracks in {selectedPlaylist.name}</h3>
              <ul>
                {tracks.map((track) => (
                  <li key={track.id}>
                    {track.title} - {track.artist}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>You need to authenticate to view playlists.</p>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default PlaylistComponent;
