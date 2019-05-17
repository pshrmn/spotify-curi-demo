import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Discover() {
  const discover = api.categorizedPlaylist("discover");

  return (
    <Wrapper type="discover">
      <h2>Playlists made just for you</h2>
      <ThumbnailList>
         {discover.map(list => (
          <Thumbnail
            key={list.id}
            name="Playlist"
            params={{ id: list.id }}
            title={list.title}
          />
        ))}
      </ThumbnailList>
    </Wrapper>
  );
}
