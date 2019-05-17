import React from "react";

import SongList from "../../SongList";
import api from "../../../api/session";

export default function Tracks() {
  const songs = api.user.songs;
  return (
    <div>
      <h2>Tracks</h2>
      <SongList songs={songs} />
    </div>
  );
}
