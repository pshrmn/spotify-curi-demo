import React from "react";

import Content from "../../Content";
import BrowseMenu from "../../menus/BrowseMenu";
import "./Browse.css"

function Browse({ children, type }) {
  return (
    <Content root="Browse" type={type}>
      <BrowseMenu />
      {children}
    </Content>
  );
}

export default Browse;
