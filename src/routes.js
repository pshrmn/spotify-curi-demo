import { prepareRoutes } from "@curi/router";
import { preferDefault } from "@curi/helpers";

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
            api.category("recent"),
            import("./components/routes/Browse/Featured")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [forYou, recent, body] = resolved;
          return {
            body,
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
          return Promise.all([
            api.category("featured charts"),
            import("./components/routes/Browse/Charts")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [featuredCharts, body] = resolved;
          return {
            body,
            data: {
              featuredCharts
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
          return Promise.all([
            api.category("genres"),
            import("./components/routes/Browse/Genres")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [genres, body] = resolved;
          return {
            body,
            data: {
              genres
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
          return Promise.all([
            api.newAlbums(15),
            import("./components/routes/Browse/NewReleases")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [albums, body] = resolved;
          return {
            body,
            data: {
              albums
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
          return Promise.all([
            api.category("discover"),
            import("./components/routes/Browse/Discover")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [discover, body] = resolved;
          return {
            body,
            data: {
              discover
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
          return Promise.all([
            Promise.resolve(api.user.playlists),
            import("./components/routes/Collection/Playlists")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [playlists, body] = resolved;
          return {
            body,
            data: {
              playlists
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
          return Promise.all([
            Promise.resolve(api.user.songs),
            import("./components/routes/Collection/Tracks")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [songs, body] = resolved
          return {
            body,
            data: {
              songs
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
          return Promise.all([
            Promise.resolve(api.user.albums),
            import("./components/routes/Collection/Albums")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [albums, body] = resolved;
          return {
            body,
            data: {
              albums
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
          return Promise.all([
            Promise.resolve(api.user.artists),
            import("./components/routes/Collection/Artists")
              .then(preferDefault)
          ]);
        },
        respond({ resolved }) {
          const [artists, body] = resolved;
          return {
            body,
            data: {
              artists
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
      return Promise.all([
        api.playlist(params.id),
        import("./components/routes/Playlist")
          .then(preferDefault)
      ]);
    },
    respond({ resolved }) {
      const [playlist, body] = resolved;
      return {
        body,
        data: {
          playlist
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
      return Promise.all([
        api.artist(params.id),
        import("./components/routes/Artist")
          .then(preferDefault)
      ]);
    },
    respond({ resolved }) {
      const [artist, body] = resolved;
      return {
        body,
        data: {
          artist
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
      return Promise.all([
        api.album(params.id),
        import("./components/routes/Album")
          .then(preferDefault)
      ]);
    },
    respond({ resolved }) {
      const [album, body] = resolved;
      return {
        body,
        data: {
          album
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
    resolve() {
      return import("./components/routes/Search")
        .then(preferDefault);
    },
    respond({ resolved }) {
      return {
        body: resolved,
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
