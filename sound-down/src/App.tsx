import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthContainer from '../src/components/AuthContainer';
import Playlists from '../src/components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    <div>
      <h1>Spotify Playlist Viewer</h1>
      <AuthContainer />
      <Playlists />
    </div>
    
      </header>
    </div>
  );
}

export default App;
