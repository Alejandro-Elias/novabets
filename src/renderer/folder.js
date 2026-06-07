import { selectFolder, listaReproduccion, player } from "../renderer.js";
import { play } from "./buttons/play.js";
import { loadList } from "./buttons/play/loadList.js";
import { cargarLista } from "./cargarLista.js";
import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";
import { resetIndex, indexCurrent } from "./indexCurrent.js";
import { getPlayList } from "./leerStorage.js";
import { updateActiveTrack } from "./resaltarTrack.js";
import { setTrack } from "./setTrack.js";

export let listaNueva = false;

export const setListaNueva = (nuevaCondicion) => {
  listaNueva = nuevaCondicion;
};

export const folder = () => {
  selectFolder.addEventListener("click", async () => {
    await window.electronAPI.carpetaALista();

    const playList = await window.electronAPI.devolverLista();
    if (playList.length > 0) {
      localStorage.removeItem("playList");

      localStorage.setItem("playList", JSON.stringify(playList));

      cargarLista(listaReproduccion, playList);

      resetIndex();

      localStorage.setItem("indexCurrent", JSON.stringify(0))

      const path = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;

      setCurrent({ path: path });

      loadData();
      loadList();
      setListaNueva(true);
      updateActiveTrack();
      
    }
  });
};
