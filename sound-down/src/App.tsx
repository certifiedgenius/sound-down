import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist';
import TrackList from './components/TrackList';
import Player from './components/Player';
import SimplePlayerControls from './components/SimplePlayerControls';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <h1>Sound Down Music App</h1>
        </div>
        
        {/* Replace this with your context provider */}
        {/* <MusicPlayerProvider> */}
          <Playlist />
          <TrackList setSelectedFile={setSelectedFile} />
          <Player />
          <SimplePlayerControls selectedFile={selectedFile} />
        {/* </MusicPlayerProvider> */}
      </header>
    </div>
  );
}

export default App;
