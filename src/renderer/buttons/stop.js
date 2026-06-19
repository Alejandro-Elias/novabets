import { player, progress, stopBtn } from "../../modules/renderer.js";
import { indexCurrent, resetIndex } from "../indexCurrent.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTrack } from "../setTrack.js";
import { playList } from "./play/loadList.js";

export const stop = () => {
  stopBtn.addEventListener("click", () => {
    player.pause();
    resetIndex();
    localStorage.setItem("indexCurrent", 0);
    setTrack(player, playList, 0);
    updateActiveTrack();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
    setTimeout(() => {
      progress.max = 100;
      progress.value = 0;
    }, 5);
  });
};
