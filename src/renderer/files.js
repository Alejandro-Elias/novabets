import { getStorage, setStorage } from "../localStorage.js";
import { selectFiles } from "../renderer.js";
import { suffle } from "../suffle.js";
import { loadList } from "./buttons/play/loadList.js";
import { loadData } from "./getData.js";
import { metadatos } from "./getMetadatos.js";
import { indexCurrent, resetIndex, setindexCurrent } from "./indexCurrent.js";
import { mostrarLista } from "./mostrarLista.js";

export const files = async () => {
  selectFiles.addEventListener("click", async () => {
    await window.electronAPI.archivoALista();
    const index = getStorage("indexCurrent");

    console.log(index);

    const nuevosArchivos = await window.electronAPI.devolverArchivos();

    if (nuevosArchivos.length > 0) {
      let nuevaPlaylist = getStorage("playList") || [];

      nuevosArchivos.forEach((track, index) => {
        const song = {
          id: nuevaPlaylist.length > 0 ? nuevaPlaylist[nuevaPlaylist.length - 1].id + 1 : index,
          track: track,
        };
        nuevaPlaylist.push(song);
      });

      if (!index) {
        setStorage("indexCurrent", 0);
        resetIndex();
      }

      setStorage("playList", nuevaPlaylist);
      suffle();
      mostrarLista();
      loadList();
      metadatos()
      loadData()
    }
  });
};
