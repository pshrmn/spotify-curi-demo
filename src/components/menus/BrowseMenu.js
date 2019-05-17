import React from "react";

import ActiveLink from "./ActiveLink";

import "./BrowseMenu.css";

function BrowseMenu() {
  return (
    <nav className="BrowseMenu">
      <ul>
        <li>
          <ActiveLink name="Browse Featured">
            Featured
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse Charts">
            Charts
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse Genres">
            Genres & Moods
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse New Releases">
            New Releases
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse Discover">
            Discover
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default BrowseMenu;
