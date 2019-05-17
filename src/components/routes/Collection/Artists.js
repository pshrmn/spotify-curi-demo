import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Artists({ response }) {
  const { artists } = response.data;
  return (
    <Wrapper type="artists">
      <h2>Artists</h2>

      <ThumbnailList>
         {artists.map(artist => (
          <Thumbnail
            key={artist.name}
            name="Artist"
            params={{ id: artist.id }}
            title={artist.name}
          />
        ))}
      </ThumbnailList>
    </Wrapper>
  );
}
