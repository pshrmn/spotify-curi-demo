import React from "react";

import Content from "../../Content";
import ThumbnailList from "../../Thumbnails/ThumbnailList";
import Thumbnail from "../../Thumbnails/Thumbnail";

import "./Artist.css";

function Artist({ response }) {
  const { artist } = response.data;
  if (!artist) {
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
          <h1>{artist.name}</h1>
        </div>
        <div>
          <h2>Albums</h2>
          <ThumbnailList>
            {artist.albums.map(album => (
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
