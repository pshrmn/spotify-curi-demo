import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Playlists({ response }) {
  const { playlists } = response.data;

  return (
    <Wrapper type="playlists">
      <h2>Playlists</h2>

      <ThumbnailList>
         {playlists.map(list => (
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
