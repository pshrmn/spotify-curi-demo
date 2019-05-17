import React from "react";

import Wrapper from "./Wrapper";
import SongList from "../../SongList";
import api from "../../../api/session";

export default function Tracks() {
  const songs = api.user.songs;
  return (
    <Wrapper type="tracks">
      <h2>Tracks</h2>
      <SongList songs={songs} />
    </Wrapper>
  );
}
