import { removeItemStorage, setStorage } from "../modules/localStorage.js";
import { selectFolder } from "../modules/renderer.js";
import { suffle } from "../modules/suffle.js";
import { loadList } from "./buttons/play/loadList.js";
import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";
import { metadatos } from "./getMetadatos.js";
import { resetIndex, indexCurrent } from "./indexCurrent.js";
import { mostrarLista } from "./mostrarLista.js";
import { updateActiveTrack } from "./resaltarTrack.js";

export let listaNueva = false;

export const setListaNueva = (nuevaCondicion) => {
  listaNueva = nuevaCondicion;
};

export const folder = () => {
  selectFolder.addEventListener("click", async () => {
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();
    if (playList.length > 0) {
      removeItemStorage("playList");

      let playListNormal = [];

      playList.forEach((track, index) => {
        const song = {
          id: index,
          track: track,
        };
        playListNormal.push(song);
      });

      setStorage("playList", playListNormal);

      mostrarLista();

      resetIndex();
      setStorage("indexCurrent", 0);

      const path = `${playListNormal[indexCurrent].track.carpeta}/${playListNormal[indexCurrent].track.archivo}`;

      setCurrent({ path: path });
      metadatos();
      setListaNueva(true);
      setStorage("listaNueva", true);
      updateActiveTrack();
      suffle();
      loadList();
    }
  });
};
