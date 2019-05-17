import { prepareRoutes } from "@curi/router";

import Browse from "./components/routes/Browse";
import Collection from "./components/routes/Collection";
import Playlist from "./components/routes/Playlist";
import Artist from "./components/routes/Artist";
import Album from "./components/routes/Album";
import Search from "./components/routes/Search";

const KNOWN_BROWSE_TYPES = new Set([
  "featured",
  "charts",
  "genres",
  "newreleases",
  "discover"
]);

const KNOWN_COLLECTION_TYPES = new Set([
  "playlists",
  "tracks",
  "albums",
  "artists"
]);

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    respond() {
      return {
        redirect: {
          name: "Browse",
          params: { type: "featured" }
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
          name: "Browse",
          params: { type: "featured" }
        }
      };
    },
    children: [
      {
        name: "Browse",
        path: ":type",
        respond({ match }) {
          if (!KNOWN_BROWSE_TYPES.has(match.params.type)) {
            return {
              redirect: {
                name: "Browse",
                params: { type: "featured" }
              }
            };
          }

          return {
            body: Browse
          }
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
          name: "Collection",
          params: { type: "playlists" }
        }
      };
    },
    children: [
      {
        name: "Collection",
        path: ":type",
        respond({ match }) {
          if (!KNOWN_COLLECTION_TYPES.has(match.params.type)) {
            return {
              redirect: {
                name: "Collection",
                params: { type: "playlists" }
              }
            };
          }

          return {
            body: Collection
          }
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
  }
]);
