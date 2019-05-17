import { prepareRoutes } from "@curi/router";

import BrowseFeatured from "./components/routes/Browse/Featured";
import BrowseCharts from "./components/routes/Browse/Charts";
import BrowseGenres from "./components/routes/Browse/Genres";
import BrowseNewReleases from "./components/routes/Browse/NewReleases";
import BrowseDiscover from "./components/routes/Browse/Discover";

import CollectionPlaylists from "./components/routes/Collection/Playlists";
import CollectionTracks from "./components/routes/Collection/Tracks";
import CollectionAlbums from "./components/routes/Collection/Albums";
import CollectionArtists from "./components/routes/Collection/Artists";

import Playlist from "./components/routes/Playlist";
import Artist from "./components/routes/Artist";
import Album from "./components/routes/Album";
import Search from "./components/routes/Search";
import NotFound from "./components/routes/NotFound";

import api from "./api/session";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    respond() {
      return {
        redirect: {
          name: "Browse Featured"
        }
      };
    }
  },
  {
    name: "Browse Group",
    path: "browse",
    respond() {
      return {
        redirect: {
          name: "Browse Featured"
        }
      };
    },
    children: [
      {
        name: "Browse Featured",
        path: "featured",
        resolve() {
          return Promise.all([
            api.category("for you"),
            api.category("recent")
          ]);
        },
        respond({ resolved }) {
          const [forYou, recent] = resolved;
          return {
            body: BrowseFeatured,
            data: {
              forYou,
              recent
            },
            meta: {
              title: "Featured Playlists"
            }
          }
        }
      },
      {
        name: "Browse Charts",
        path: "charts",
        resolve() {
          return api.category("featured charts");
        },
        respond({ resolved }) {
          return {
            body: BrowseCharts,
            data: {
              featuredCharts: resolved
            },
            meta: {
              title: "Chart Topping Playlists"
            }
          }
        }
      },
      {
        name: "Browse Genres",
        path: "genres",
        resolve() {
          return api.category("genres");
        },
        respond({ resolved }) {
          return {
            body: BrowseGenres,
            data: {
              genres: resolved
            },
            meta: {
              title: "Genre Playlists"
            }
          }
        }
      },
      {
        name: "Browse New Releases",
        path: "newreleases",
        resolve() {
          return api.newAlbums(15);
        },
        respond({ resolved }) {
          return {
            body: BrowseNewReleases,
            data: {
              albums: resolved
            },
            meta: {
              title: "New Releases"
            }
          }
        }
      },
      {
        name: "Browse Discover",
        path: "discover",
        resolve() {
          return api.category("discover");
        },
        respond({ resolved }) {
          return {
            body: BrowseDiscover,
            data: {
              discover: resolved
            },
            meta: {
              title: "Discover New Music"
            }
          }
        }
      },
      {
        name: "Browse Unknown",
        path: ":type(.*)",
        respond() {
          return {
            redirect: {
              name: "Browse Featured"
            }
          };
        }
      }
    ]
  },
  {
    name: "Collection Group",
    path: "collection",
    respond() {
      return {
        redirect: {
          name: "Playlists Collection",
        }
      };
    },
    children: [
      {
        name: "Playlists Collection",
        path: "playlists",
        resolve() {
          return Promise.resolve(api.user.playlists);
        },
        respond({ resolved }) {
          return {
            body: CollectionPlaylists,
            data: {
              playlists: resolved
            },
            meta: {
              title: "Your Playlists"
            }
          };
        }
      },
      {
        name: "Tracks Collection",
        path: "tracks",
        resolve() {
          return Promise.resolve(api.user.songs);
        },
        respond({ resolved }) {
          return {
            body: CollectionTracks,
            data: {
              songs: resolved
            },
            meta: {
              title: "Your Favorite Songs"
            }
          };
        }
      },
      {
        name: "Albums Collection",
        path: "albums",
        resolve() {
          return Promise.resolve(api.user.albums);
        },
        respond({ resolved }) {
          return {
            body: CollectionAlbums,
            data: {
              albums: resolved
            },
            meta: {
              title: "Your Favorite Albums"
            }
          };
        }
      },
      {
        name: "Artists Collection",
        path: "artists",
        resolve() {
          return Promise.resolve(api.user.artists);
        },
        respond({ resolved }) {
          return {
            body: CollectionArtists,
            data: {
              artists: resolved
            },
            meta: {
              title: "Your Favorite Artists"
            }
          };
        }
      },
      {
        name: "Collection Unknown",
        path: ":type(.*)",
        respond() {
          return {
            redirect: {
              name: "Collection",
              params: { type: "playlists" }
            }
          };
        }
      }
    ]
  },
  {
    name: "Playlist",
    path: "playlist/:id",
    resolve({ params }) {
      return api.playlist(params.id);
    },
    respond({ resolved }) {
      return {
        body: Playlist,
        data: {
          playlist: resolved
        },
        meta: {
          title: "Playlist"
        }
      };
    }
  },
  {
    name: "Artist",
    path: "artist/:id",
    resolve({ params }) {
      return api.artist(params.id);
    },
    respond({ resolved }) {
      return {
        body: Artist,
        data: {
          artist: resolved
        },
        meta: {
          title: "Artist"
        }
      };
    }
  },
  {
    name: "Album",
    path: "album/:id",
    resolve({ params }) {
      return api.album(params.id);
    },
    respond({ resolved }) {
      return {
        body: Album,
        data: {
          album: resolved
        },
        meta: {
          title: "Album"
        }
      };
    }
  },
  {
    name: "Search",
    path: "search",
    respond() {
      return {
        body: Search,
        meta: {
          title: "Search"
        }
      };
    }
  },
  {
    name: "Not Found",
    path: "(.*)",
    respond() {
      return {
        body: NotFound,
        meta: {
          title: "Unknown Location"
        }
      };
    }
  }
]);
