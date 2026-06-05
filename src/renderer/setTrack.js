import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";

export const setTrack = async (player, playList, indexCurrrent) => {
  if (!playList.length) {
    return;
  }

  const path = `${playList[indexCurrrent].carpeta}/${playList[indexCurrrent].archivo}`;

  setCurrent({ path: path });

  loadData();

  player.src = playList.length > 0 ? path : "";
};
