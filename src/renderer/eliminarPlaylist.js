import { getStorage, setStorage } from "../modules/localStorage.js";
import { mostrarlistas } from "./mostrarLista.js";

export const eliminarPlaylist = (id) => {
  let listasGuardadas = getStorage("playlists");

  const nuevasListas = listasGuardadas.filter((lista) => lista.id != id);

  setStorage("playlists", nuevasListas);

  mostrarlistas();
};
