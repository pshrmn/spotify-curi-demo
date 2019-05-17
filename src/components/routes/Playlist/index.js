import React from "react";

import Content from "../../Content";
import SongList from "../../SongList";
import Box from "../../Thumbnails/Box";

import "./Playlist.css";

function Playlist({ response }) {
  const { playlist } = response.data;
  if (!playlist) {
    return (
      <Content type="playlist">
        <div className="Playlist">
          <div>uh oh, playlist not found :(</div>
        </div>
      </Content>
    );
  }
  return (
    <Content type="playlist">
      <div className="Playlist">
        <div className="about">
          <Box />
          <h1>{playlist.title}</h1>
        </div>
        <SongList songs={playlist.songs} />
      </div>
    </Content>
  );
}

export default Playlist;
