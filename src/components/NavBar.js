import React from "react";
import { useActive, Link } from "@curi/react-dom";

import "./NavBar.css";

function ActiveLink({ name, params, partial = false, ...rest }) {
  const active = useActive({ name, params, partial });
  return (
    <Link name={name} params={params} {...rest} className={active ? "active" : ""} />
  );
}

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <div className="NavBar-header">
          <Link name="Browse Featured">
            Three Bars
          </Link>
        </div>

        <ul className="NavBar-list">
          <li>
            <ActiveLink name="Browse Group" partial={true}>
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink name="Search">
              Search
            </ActiveLink>
          </li>
          <li>
            <ActiveLink name="Collection Group" partial={true}>
              Your Library
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
