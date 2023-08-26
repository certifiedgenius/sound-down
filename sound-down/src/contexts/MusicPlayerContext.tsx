// contexts/MusicPlayerContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
}

interface MusicPlayerContextType {
  currentPlaylist: Playlist | null;
  setCurrentPlaylist: (playlist: Playlist) => void;
  currentTrack: Track | null;
  play: (track: Track) => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  shuffle: () => void;
  repeat: () => void;
  playlists: Playlist[];
  isPlaying: boolean;
}

export const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialPlaylist: Playlist = {
    id: 'default',
    name: 'Default Playlist',
    tracks: [] // Initialize with some default tracks if needed
  };

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(initialPlaylist);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Logic to control audio playback based on isPlaying state
    if (isPlaying) {
      // Play audio logic
    } else {
      // Pause audio logic
    }
  }, [isPlaying]);

  const play = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const next = () => {
    // Logic to play the next track in the playlist
  };

  const previous = () => {
    // Logic to play the previous track in the playlist
  };

  const shuffle = () => {
    // Logic to shuffle the playlist
  };

  const repeat = () => {
    // Logic to toggle repeat mode
  };

  const contextValue: MusicPlayerContextType = {
    currentTrack,
    currentPlaylist,
    setCurrentPlaylist,
    play,
    pause,
    next,
    previous,
    shuffle,
    repeat,
    playlists,
    isPlaying,
  };

  return (
    <MusicPlayerContext.Provider value={contextValue}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
