import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlists from '../src/components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    <div>
      <h1>Spotify Playlist Viewer</h1>
      <Playlists />
    </div>
    
      </header>
    </div>
  );
}

export default App;
