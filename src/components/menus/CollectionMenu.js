import React from "react";

import ActiveLink from "./ActiveLink";

import "./CollectionMenu.css";

function CollectionMenu() {
  return (
    <nav className="CollectionMenu">
      <ul>
        <li>
          <ActiveLink name="Collection" params={{ type: "playlists"}}>
            Playlists
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Collection" params={{ type: "tracks"}}>
            Favorite Songs
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Collection" params={{ type: "albums"}}>
            Albums
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Collection" params={{ type: "artists"}}>
            Artists
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default CollectionMenu;
