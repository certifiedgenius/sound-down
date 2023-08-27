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
    const audioElement = document.getElementById('audio-element') as HTMLAudioElement;

    if (isPlaying && currentTrack) {
      console.log('Playing audio:', currentTrack.title);
      audioElement.src = currentTrack.url;
      audioElement.play();
    } else {
      console.log('Paused audio');
      audioElement.pause();
    }
  }, [isPlaying, currentTrack]);

  const play = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const next = () => {
    if (currentPlaylist?.tracks) {
      const currentIndex = currentPlaylist.tracks.findIndex(track => track.id === currentTrack?.id);
      if (currentIndex !== undefined && currentIndex !== null && currentIndex < currentPlaylist.tracks.length - 1) {
        play(currentPlaylist.tracks[currentIndex + 1]);
      }
    }
  };
  
  const previous = () => {
    if (currentPlaylist?.tracks) {
      const currentIndex = currentPlaylist.tracks.findIndex(track => track.id === currentTrack?.id);
      if (currentIndex !== undefined && currentIndex !== null && currentIndex > 0) {
        play(currentPlaylist.tracks[currentIndex - 1]);
      }
    }
  };

  const shuffle = () => {
    if (currentPlaylist) {
      const shuffledTracks = [...currentPlaylist.tracks];
      for (let i = shuffledTracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
      }
      setCurrentPlaylist({ ...currentPlaylist, tracks: shuffledTracks });
    }
  };

  const repeat = () => {
    // Toggle repeat mode if needed
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
      <audio id="audio-element" controls />
    </MusicPlayerContext.Provider>
  );
};