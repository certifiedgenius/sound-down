import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist';
import TrackList from './components/TrackList';
import Player from './components/Player';
import PlayerControls from './components/PlayerControls'; // Import PlayerControls component
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <h1>Sound Down Music App</h1>
        </div>
        
        <MusicPlayerProvider>
          <Playlist />
          <TrackList setSelectedFile={setSelectedFile} />
          <Player />
          <PlayerControls /> {/* Add PlayerControls component */}
        </MusicPlayerProvider>
      </header>
    </div>
  );
}

export default App;
