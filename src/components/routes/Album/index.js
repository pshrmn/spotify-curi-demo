import React from "react";
import { Link } from "@curi/react-dom";

import Content from "../../Content";
import SongList from "../../SongList";
import Box from "../../Thumbnails/Box";
import api from "../../../api/session";

import "./Album.css";

function Album({ response }) {
  const { id } = response.params;
  const data = api.album(id);
  if (!data) {
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
          <h1>{data.title}</h1>
          <p>
            <Link name="Artist" params={{ id: data.artist.id }}>
              {data.artist.name}
            </Link>
          </p>
        </div>
        <SongList songs={data.songs} byline={false} />
      </div>
    </Content>
  );
}

export default Album;
