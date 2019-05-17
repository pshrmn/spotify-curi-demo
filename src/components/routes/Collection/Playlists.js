import React from "react";

import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Playlists() {
  const playlists = api.user.playlists;

  return (
    <div>
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
    </div>
  );
}
