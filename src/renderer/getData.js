import { getStorage } from "../localStorage.js";
import {
  artistEl,
  imgCover,
  player,
  progress,
  time,
  titleEl,
} from "../renderer.js";
import { getCurrent, setCurrent } from "./currentTrack.js";
import { getList, setList } from "./listMetadatos.js";
import { mostrarMetadata } from "./mostrarDatos.js";
import { tiempos } from "./tiempos.js";

export const loadData = async () => {

  const current = getCurrent()

  const metadatos = getList()
  
  const dato = metadatos.find( dato => current.id === dato.id )

  console.trace("getMetadata ejecutado");  

  setCurrent({ metadata: dato })

  mostrarMetadata(titleEl, artistEl, imgCover);

  tiempos(player, progress, time);

  return;
};
