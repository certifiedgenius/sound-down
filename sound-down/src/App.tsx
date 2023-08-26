import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlists from '../src/components/Playlist';
import TrackList from '../src/components/TrackList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    <div>
      <h1>File upload</h1>
    </div>
    <Playlists />
          <TrackList />
      </header>
    </div>
  );
}

export default App;
