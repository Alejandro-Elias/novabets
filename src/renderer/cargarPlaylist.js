import { getStorage, setStorage } from "../localStorage.js";
import { suffle } from "../suffle.js";
import { loadList } from "./buttons/play/loadList.js";
import { metadatos } from "./getMetadatos.js";
import { mostrarLista } from "./mostrarLista.js";

export const cargarPlaylist = (id) => {
  const playLists = getStorage("playlists");

  let playlistACargar = [];

  playLists.forEach((item) =>
    item.id === id ? (playlistACargar = item.playList) : [],
  );

  setStorage("playList", playlistACargar);

  suffle();
  mostrarLista();
  loadList();
  metadatos()
};
