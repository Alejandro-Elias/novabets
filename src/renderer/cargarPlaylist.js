import { getStorage, setStorage } from "../modules/localStorage.js";
import { suffle } from "../modules/suffle.js";
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
  metadatos();
  loadList();
};
