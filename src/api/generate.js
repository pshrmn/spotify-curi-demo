import artistName from "./generators/artist";
import title from "./generators/title";

export function id() {
  return Math.random().toString(36).slice(2);
}

export function artist() {
  return {
    id: id(),
    name: artistName(),
    albums: []
  };
}

export function song(artist, featuring) {
  return {
    artist,
    featuring,
    id: id(),
    title: title(),
    time: 120 + Math.floor(Math.random() * 180),
    album: undefined
  };
}

export function album(artist, collaborators) {
  const a = {
    id: id(),
    title: title(),
    artist,
    songs: []
  };

  const length = 8 + Math.floor(Math.random() * 10);
  for (let i=0; i<length; i++) {
    const featuring = Math.random() > 0.8
      ? collaborators[Math.floor(Math.random() * collaborators.length)]
      : undefined;
    const s = song(artist, featuring);
    a.songs.push(s);
    s.album = a;
  }
  return a;
}

export function playlist(albums) {
  const songs = [];
  const length = 6 + Math.floor(Math.random() * 15);
  for (let i=0; i<length; i++) {
    const album = albums[Math.floor(Math.random() * albums.length)];
    const song = album.songs[Math.floor(Math.random() * album.songs.length)];
    songs.push(song);
  }
  return {
    id: id(),
    title: title(),
    songs
  };
}
