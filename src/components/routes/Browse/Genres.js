import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Genres({ response }) {
  const { genres } = response.data;

  return (
    <Wrapper type="genres">
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
    </Wrapper>
  );
}
