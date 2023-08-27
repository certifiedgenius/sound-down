// src/components/TrackList.tsx
import React, { useState, ChangeEvent } from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

interface TrackInfo {
  id: string;
  title: string;
  artist: string;
  url: string;
}

interface TrackListProps {
  setSelectedFile: (file: File | null) => void;
}

const TrackList: React.FC<TrackListProps> = ({ setSelectedFile }) => {
  const [selectedFile, setSelectedFileState] = useState<File | null>(null);
  const { play } = useMusicPlayer();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFileState(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('File uploaded:', responseData);
      } else {
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = (trackUrl: string, trackTitle: string) => {
    const link = document.createElement('a');
    link.href = trackUrl;
    link.download = `${trackTitle}.mp3`;
    link.click();
  };

  const tracks: TrackInfo[] = [
    {
      id: '1',
      title: 'Song 1',
      artist: 'Artist 1',
      url: '/audio1.mp3', // Update this URL
    },
    {
      id: '2',
      title: 'Song 2',
      artist: 'Artist 2',
      url: '/audio2.mp3', // Update this URL
    },
    // ... other tracks
  ];

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      
      {tracks.map((track) => (
        <div key={track.id}>
          <p>
            {track.title} - {track.artist}
            <button onClick={() => handleDownload(track.url, track.title)}>
              Download
            </button>
            <button onClick={() => play(track)}>Play</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
