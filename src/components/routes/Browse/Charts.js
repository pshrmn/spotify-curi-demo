import React from "react";

import Wrapper from "./Wrapper";
import Thumbnail from "../../Thumbnails/Thumbnail";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import api from "../../../api/session";

export default function Charts() {
  const featuredCharts = api.categorizedPlaylist("featured charts");

  return (
    <Wrapper type="featured">
      <h2>Featured Charts</h2>
      <ThumbnailList>
         {featuredCharts.map(list => (
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
