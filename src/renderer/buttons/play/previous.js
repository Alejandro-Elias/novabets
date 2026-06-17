import { getStorage } from "../../../localStorage.js";
import { player, previousBtn } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { indexCurrent, previousIndex } from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { setTrack } from "../../setTrack.js";
import { ejecutarPlay } from "../play.js";
import { loadList, playList } from "./loadList.js";

export const previousTrack = () => {
  const previous = () => {
    if (indexCurrent > 0) {
      loadList();
      previousIndex();
      updateActiveTrack();
      setTimeout(() => {
        progress.max = 100;
        progress.value = 0;
      }, 5);
    }

    setTrack(player, playList, indexCurrent);
    ejecutarPlay();
  };

  previousBtn.addEventListener("click", () => {
    previous();
  });
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      previous();
    });
  }
};
