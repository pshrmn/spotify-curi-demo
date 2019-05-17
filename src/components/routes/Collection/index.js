import React from "react";

import Playlists from "./Playlists";
import Tracks from "./Tracks";
import Albums from "./Albums";
import Artists from "./Artists";

import CollectionMenu from "../../menus/CollectionMenu";
import "./Collection.css"

function Collection({ response }) {
  const { type } = response.params;
  let Content = null;
  switch(type) {
    case "playlists":
      Content = Playlists;
      break;
    case "tracks":
      Content = Tracks;
      break;
    case "albums":
      Content = Albums;
      break;
    case "artists":
      Content = Artists;
      break;
    default:
      break;
  }
  return (
    <div className={`Collection ${type}`}>
      <div className="contentSpacing">
        <CollectionMenu />
        <Content />
      </div>
    </div>
  );
}

export default Collection;
