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
        respond() {
          return {
            body: BrowseFeatured
          }
        }
      },
      {
        name: "Browse Charts",
        path: "charts",
        respond() {
          return {
            body: BrowseCharts
          }
        }
      },
      {
        name: "Browse Genres",
        path: "genres",
        respond() {
          return {
            body: BrowseGenres
          }
        }
      },
      {
        name: "Browse New Releases",
        path: "newreleases",
        respond() {
          return {
            body: BrowseNewReleases
          }
        }
      },
      {
        name: "Browse Discover",
        path: "discover",
        respond() {
          return {
            body: BrowseDiscover
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
        respond() {
          return {
            body: CollectionPlaylists
          };
        }
      },
      {
        name: "Tracks Collection",
        path: "tracks",
        respond() {
          return {
            body: CollectionTracks
          };
        }
      },
      {
        name: "Albums Collection",
        path: "albums",
        respond() {
          return {
            body: CollectionAlbums
          };
        }
      },
      {
        name: "Artists Collection",
        path: "artists",
        respond() {
          return {
            body: CollectionArtists
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
    respond() {
      return {
        body: Playlist
      };
    }
  },
  {
    name: "Artist",
    path: "artist/:id",
    respond() {
      return {
        body: Artist
      };
    }
  },
  {
    name: "Album",
    path: "album/:id",
    respond() {
      return {
        body: Album
      };
    }
  },
  {
    name: "Search",
    path: "search",
    respond() {
      return {
        body: Search
      };
    }
  },
  {
    name: "Not Found",
    path: "(.*)",
    respond() {
      return {
        body: NotFound
      };
    }
  }
]);
