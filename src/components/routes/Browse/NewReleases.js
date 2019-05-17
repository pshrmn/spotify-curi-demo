import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function NewReleases() {
  const albums = api.newAlbums(15);
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
