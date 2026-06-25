import { setCurrent } from "./currentTrack.js";

export const setTrack = async (player, playList, indexCurrrent) => {
  if (!playList.length) {
    return;
  }

  const path = `${playList[indexCurrrent].track.carpeta}/${playList[indexCurrrent].track.archivo}`;

  setCurrent({
    path: path,
    id: playList[indexCurrrent].id,
  });

  player.src = playList.length > 0 ? path : ""; 
};

