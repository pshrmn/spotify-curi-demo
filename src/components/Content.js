import React from "react";

import "./Content.css";

export default function Content({ children, type }) {
  return (
    <div className="Content">
      <div className={`bg ${type}`}></div>
      <div className="actual-content">
        <div className="contentSpacing">
          {children}
        </div>
      </div>
    </div>
  );
}
