import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Albums({ response }) {
  const { albums } = response.data;

  return (
    <Wrapper type="albums">
      <h2>Albums</h2>
      <ThumbnailList>
         {albums.map(album => (
          <Thumbnail
            key={album.id}
            name="Album"
            params={{ id: album.id }}
            title={album.title}
          />
        ))}
      </ThumbnailList>
    </Wrapper>
  );
}
