import React from "react";
import { Link } from "@curi/react-dom";

import Content from "../../Content";
import SongList from "../../SongList";
import Box from "../../Thumbnails/Box";

import "./Album.css";

function Album({ response }) {
  const { album } = response.data;
  if (!album) {
    return (
      <Content type="album">
        <div className="Album">
          <div>uh oh, album not found :(</div>
        </div>
      </Content>
    );
  }

  return (
    <Content type="album">
      <div className="Album">
        <div className="about">
          <Box />
          <h1>{album.title}</h1>
          <p>
            <Link name="Artist" params={{ id: album.artist.id }}>
              {album.artist.name}
            </Link>
          </p>
        </div>
        <SongList songs={album.songs} byline={false} />
      </div>
    </Content>
  );
}

export default Album;
