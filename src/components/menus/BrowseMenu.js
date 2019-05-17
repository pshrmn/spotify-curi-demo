import React from "react";

import ActiveLink from "./ActiveLink";

import "./BrowseMenu.css";

function BrowseMenu() {
  return (
    <nav className="BrowseMenu">
      <ul>
        <li>
          <ActiveLink name="Browse" params={{ type: "featured"}}>
            Featured
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse" params={{ type: "charts"}}>
            Charts
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse" params={{ type: "genres"}}>
            Genres & Moods
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse" params={{ type: "newreleases"}}>
            New Releases
          </ActiveLink>
        </li>
        <li>
          <ActiveLink name="Browse" params={{ type: "discover"}}>
            Discover
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default BrowseMenu;
