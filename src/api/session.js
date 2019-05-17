import { artist, album, playlist } from "./generate";

/*
 * this module generates some global content for the session
 * (it will be wiped out if the page refreshes)
 * the whole module is a bit of the mess, but it gets the job done
 */

const artists = [];
const albums = [];
const playlists = [];
const categories = {};

// generate 100 artists
for (let i=0; i<100; i++) {
  const a = artist();
  artists.push(a);
}

function random(count, from, not) {
  const things = [];
  let iterations = 0;
  while (things.length < count && iterations++ < 1000) {
    const maybe = Math.floor(Math.random() * from);
    if (!not.has(maybe)) {
      things.push(maybe);
      not.add(maybe);
    }
  }
  return things;
}

// each artist has 1-3 albums
for (let i=0; i<100; i++) {
  const possibleCollaborators = random(6, 100, new Set([i])).map(index => artists[index]);
  for (let j=0, max=Math.ceil(Math.random()*3); j<max; j++) {
    const a = album(artists[i], possibleCollaborators);
    albums.push(a);
    artists[i].albums.push(a);
  }
}

function groupOfPlaylists(name, count) {
  const list = [];
  for (let i=0; i<count; i++) {
    const p = playlist(albums);
    playlists.push(p);
    list.push(p);
  }
  categories[name] = list;
}

groupOfPlaylists("for you", 10);
groupOfPlaylists("recent", 10);
groupOfPlaylists("featured charts", 10);
groupOfPlaylists("genres", 30);
groupOfPlaylists("discover", 6);

const user = {
  playlists: random(6, playlists.length, new Set())
    .map(index => playlists[index]),
  songs: random(6, albums.length, new Set())
    .map(index => albums[index])
    .map(album => album.songs[Math.floor(Math.random() * album.songs.length)]),
  albums: random(6, albums.length, new Set())
    .map(index => albums[index]),
  artists: random(6, artists.length, new Set())
    .map(index => artists[index])
};

export default {
  category(id) {
    return Promise.resolve(categories[id]);
  },
  playlist(id) {
    return Promise.resolve(playlists.find(p => p.id === id));
  },
  artist(id) {
    return Promise.resolve(artists.find(a => a.id === id));
  },
  album(id) {
    return Promise.resolve(albums.find(a => a.id === id));
  },
  newAlbums(count) {
    return Promise.resolve(
      random(count, albums.length, new Set())
        .map(index => albums[index])
    );
  },
  user
};
