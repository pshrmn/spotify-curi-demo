import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Featured() {
  const forYou = api.categorizedPlaylist("for you");
  const recent = api.categorizedPlaylist("recent");
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
