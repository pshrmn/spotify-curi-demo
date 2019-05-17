import React from "react";

import ActiveLink from "./ActiveLink";

import "./CollectionMenu.css";

function CollectionMenu() {
  return (
    <nav className="CollectionMenu">
      <ul>
        <li>
          <ActiveLink name="Playlists Collection">
            Playlists
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Tracks Collection">
            Favorite Songs
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Albums Collection">
            Albums
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Artists Collection">
            Artists
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default CollectionMenu;
