import React from "react";
import { useActive, Link } from "@curi/react-dom";

function ActiveLink({ name, params, ...rest }) {
  const active = useActive({ name, params });
  return (
    <Link name={name} params={params} {...rest} className={active ? "active" : ""} />
  );
}

export default ActiveLink;
