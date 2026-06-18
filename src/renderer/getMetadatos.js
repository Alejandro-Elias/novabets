import { getStorage } from "../localStorage.js";
import { playList } from "./buttons/play/loadList.js";
import { setList } from "./listMetadatos.js";

export const metadatos = async () => {
  const playListMeta = getStorage("playList") || playList || [];

  if (playListMeta) {
    const data = await window.electronAPI.getMetaData(playListMeta);

    setList(data);
  }

  return;
};
