import React from "react";

import Featured from "./Featured";
import Charts from "./Charts";
import Genres from "./Genres";
import NewReleases from "./NewReleases";
import Discover from "./Discover";

import Content from "../../Content";
import BrowseMenu from "../../menus/BrowseMenu";
import "./Browse.css"

function Browse({ response }) {
  const { type } = response.params;
  let Page = null;
  switch(type) {
    case "featured":
      Page = Featured;
      break;
    case "charts":
      Page = Charts;
      break;
    case "genres":
      Page = Genres;
      break;
    case "newreleases":
      Page = NewReleases;
      break;
    case "discover":
      Page = Discover;
      break;
    default:
      break;
  }
  return (
    <Content root="Browse" type={type}>
      <BrowseMenu />
      <Page />
    </Content>
  );
}

export default Browse;
