import React from "react";

import CollectionMenu from "../../menus/CollectionMenu";
import "./Collection.css"

function Collection({ children, type }) {
  return (
    <div className={`Collection ${type}`}>
      <div className="contentSpacing">
        <CollectionMenu />
        {children}
      </div>
    </div>
  );
}

export default Collection;
