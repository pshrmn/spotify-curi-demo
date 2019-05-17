import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";

export default function Featured({ response }) {
  const { forYou, recent } = response.data;
  return (
    <Wrapper type="featured">
      <h2>Made for you</h2>
      <ThumbnailList>
         {forYou.map(list => (
          <Thumbnail
            key={list.id}
            name="Playlist"
            params={{ id: list.id }}
            title={list.title}
          />
        ))}
      </ThumbnailList>
      <h2>Recently Played</h2>
      <ThumbnailList>
         {recent.map(list => (
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
