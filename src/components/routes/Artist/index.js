import React from "react";

import Content from "../../Content";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import Thumbnail from "../../Thumbnails/Thumbnail";
import api from "../../../api/session";

import "./Artist.css";

function Artist({ response }) {
  const { id } = response.params;
  const data = api.artist(id);
  if (!data) {
    return (
      <Content type="artist">
        <div className="Artist">
          <div>uh oh, artist not found :(</div>
        </div>
      </Content>
    );
  }

  return (
    <Content type="artist">
      <div className="Artist">
        <div className="about">
          <h1>{data.name}</h1>
        </div>
        <div>
          <h2>Albums</h2>
          <ThumbnailList>
            {data.albums.map(album => (
              <Thumbnail
                key={album.id}
                name="Album"
                params={{ id: album.id }}
                title={album.title}
              />
            ))}
          </ThumbnailList>
        </div>
      </div>
    </Content>
  );
}

export default Artist;
