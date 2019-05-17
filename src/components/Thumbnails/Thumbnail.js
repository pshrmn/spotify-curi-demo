import React from "react";
import { Link } from "@curi/react-dom";

import Box from "./Box";
import "./Thumbnail.css";

export default function Thumbnail({ name, params, title }) {
  return (
    <div className="Thumbnail">
      <Link name={name} params={params}>
        <Box />
      </Link>
      <p>
        <Link name={name} params={params}>
          {title}
        </Link>
      </p>
    </div>
  );
}
