import React from "react";

import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Genres() {
  const genres = api.categorizedPlaylist("genres");

  return (
    <div>
      <h2>Genres & Moods</h2>
      <ThumbnailList>
         {genres.map(list => (
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
