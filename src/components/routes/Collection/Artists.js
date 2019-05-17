import React from "react";

import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Artists() {
  const artists = api.user.artists;

  return (
    <div>
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
    </div>
  );
}
