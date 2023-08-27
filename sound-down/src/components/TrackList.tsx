// src/components/TrackList.tsx
import React, { useState, ChangeEvent } from 'react';

interface TrackInfo {
  id: string;
  title: string;
  artist: string;
  url: string;
}

const TrackList: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [tracks, setTracks] = useState<TrackInfo[]>([]); // Add tracks state

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
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
        // Handle successful upload response
        const responseData = await response.json();
        console.log('File uploaded:', responseData);
      } else {
        // Handle error
        console.error('Error uploading file');
      }
    } catch (error) {
      // Handle error
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = (trackUrl: string, trackTitle: string) => {
    // Create an anchor element and simulate a click to download the track
    const link = document.createElement('a');
    link.href = trackUrl;
    link.download = `${trackTitle}.mp3`;
    link.click();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {/* Render the list of tracks */}
      {tracks.map((track) => (
        <div key={track.id}>
          <p>
            {track.title} - {track.artist}
            <button onClick={() => handleDownload(track.url, track.title)}>
              Download
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
