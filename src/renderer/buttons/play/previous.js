import { player, previousBtn } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { loadData } from "../../getData.js";
import { indexCurrent, previousIndex } from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { playList } from "./loadList.js";

export const previousTrack = () => {

  const previous = () => {
    if (indexCurrent > 0) {
      previousIndex();
    }

    updateActiveTrack();

    const currentPlay = `${playList[indexCurrent].carpeta}/${playList[indexCurrent].archivo}`;

    player.src = currentPlay;
    setCurrent({ path: currentPlay });
    loadData();
    player.play();
  }

  previousBtn.addEventListener("click", () => {
    previous()
  });
   if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      previous();
    });
  }
};
