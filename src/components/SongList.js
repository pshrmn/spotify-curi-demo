import React from "react";
import { Link } from "@curi/react-dom";

import "./SongList.css";

function secondsToMinutes(time) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export default function SongList({ songs, byline = true }) {
  return (
    <div className="SongList">
      {songs.map(song => (
        <div key={song.title} className="song">
          <div>
            <div>
              {song.title}
            </div>
            {byline
              ? <div>
                  <Link name="Artist" params={{ id: song.artist.id }}>
                    {song.artist.name}
                  </Link>
                  <span className="separator">•</span>
                  <Link name="Album" params={{ id: song.album.id }}>
                    {song.album.title}
                  </Link>
                </div>
              : null
            }
          </div>
          <div>
            {secondsToMinutes(song.time)}
          </div>
        </div>
      ))}
    </div>
  );
}
