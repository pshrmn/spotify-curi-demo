import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function NewReleases({ response }) {
  const { albums } = response.data;
  return (
    <Wrapper type="newreleases">
      <h2>New albums & singles</h2>
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
