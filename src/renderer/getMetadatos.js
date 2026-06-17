import { getStorage } from "../localStorage.js";
import { setList } from "./listMetadatos.js";

export const metadatos = async () => {
  const playListMeta = getStorage("playList");

  const data = await window.electronAPI.getMetaData(playListMeta);  

  setList(data);

  return;
};
