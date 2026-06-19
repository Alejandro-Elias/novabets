import {
  artistEl,
  imgCover,
  player,
  progress,
  time,
  titleEl,
} from "../modules/renderer.js";
import { getCurrent, setCurrent } from "./currentTrack.js";
import { getList, setList } from "./listMetadatos.js";
import { mostrarMetadata } from "./mostrarDatos.js";
import { tiempos } from "./tiempos.js";

export const loadData = async () => {
  const current = getCurrent();

  const metadatos = getList();

  if (metadatos) {
    const dato = metadatos.find((dato) => current.id === dato.id);

    if (dato) {
      setCurrent({ metadata: dato });
      mostrarMetadata(titleEl, artistEl, imgCover);
    }

    tiempos(player, progress, time);
  }
  return;
};
