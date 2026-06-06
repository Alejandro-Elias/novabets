import { artistEl, imgCover, player, progress, time, titleEl } from "../renderer.js";
import { getCurrent, setCurrent } from "./currentTrack.js";
import { mostrarMetadata } from "./mostrarDatos.js";
import { tiempos } from "./tiempos.js";

export const loadData = async () => {
  const path = getCurrent()  

  const data = await window.electronAPI.getMetaData(path.path)
  setCurrent({metadata: data})  
  
  mostrarMetadata(titleEl, artistEl, imgCover)

  tiempos(player, progress, time)
  
  return data;
};
