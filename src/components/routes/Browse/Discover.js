import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Discover({ response }) {
  const { discover } = response.data;

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
