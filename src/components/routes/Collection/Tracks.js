import React from "react";

import Wrapper from "./Wrapper";
import SongList from "../../SongList";

export default function Tracks({ response }) {
  const { songs } = response.data;
  return (
    <Wrapper type="tracks">
      <h2>Tracks</h2>
      <SongList songs={songs} />
    </Wrapper>
  );
}
