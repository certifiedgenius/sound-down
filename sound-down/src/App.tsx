import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlists from '../src/components/Playlist';
import TrackList from '../src/components/TrackList';
import Player from './components/Player';
import { MusicPlayerProvider } from '../src/contexts/MusicPlayerContext';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <div>
        <h1>Sound Down Music App</h1>
      </div>
        
          <Playlists />
          <TrackList />
          <Player />
        
      </header>
    </div>
  );
}

export default App;
