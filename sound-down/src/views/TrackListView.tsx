// src/views/TrackListViews.tex
import React from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
}

interface TrackListProps {
  tracks: Track[];
}

const TrackListView: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>
          {track.title} - {track.artist}
        </li>
      ))}
    </ul>
  );
};

export default TrackListView;
