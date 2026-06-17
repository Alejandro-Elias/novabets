import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";

export const setTrack = async (player, playList, indexCurrrent) => {
  if (!playList.length) {
    return;
  }

  const path = `${playList[indexCurrrent].track.carpeta}/${playList[indexCurrrent].track.archivo}`;

  setCurrent({
    path: path,
    id: playList[indexCurrrent].id,
  });

  loadData();

  player.src = playList.length > 0 ? path : "";
};
