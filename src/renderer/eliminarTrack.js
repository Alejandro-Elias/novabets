import { getStorage, setStorage } from "../modules/localStorage.js";
import { loadList } from "./buttons/play/loadList.js";
import { getCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";
import { metadatos } from "./getMetadatos.js";
import { resetIndex, setindexCurrent } from "./indexCurrent.js";

export const eliminarTrack = async (id) => {
  const trackActual = getCurrent();

  const playList = getStorage("playList");
  const playListSuffle = getStorage("playListSuffle");

  const listaNueva = playList.filter((item) => {
    return item.id != id;
  });

  const listaNuevaSuffle = playListSuffle.filter((item) => {
    return item.id != id;
  });

  const indiceActual = listaNueva.findIndex(
    (archivo) => archivo.id === trackActual.id,
  );

  setindexCurrent(indiceActual);

  if (indiceActual === -1) {
    resetIndex();
    setStorage("indexCurrent", 0);
  }

  setStorage("playList", listaNueva);
  setStorage("playListSuffle", listaNuevaSuffle);
  await metadatos();
  loadData();
  loadList();
};
