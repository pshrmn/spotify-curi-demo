import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Albums() {
  const albums = api.user.albums;

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
