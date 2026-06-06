import { player } from "../../../renderer.js";
import { listaNueva, setListaNueva } from "../../folder.js";
import { loadData } from "../../getData.js";
import {
  indexCurrent,
  nextIndex,
  resetIndex,
  setindexCurrent,
} from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { setTrack } from "../../setTrack.js";
import { playList } from "./loadList.js";

let repeatCondition = "repeat-normal";

export const setRepeatCondition = (condition) => {
  repeatCondition = condition;
};

export const nextTrack = () => {
  const next = () => {
    if (listaNueva) {
      setListaNueva(false);
      updateActiveTrack();
    } else {
      if (repeatCondition === "repeat-one") {
        setindexCurrent(indexCurrent);
      } else {
        nextIndex();
      }
      updateActiveTrack();

      if (indexCurrent >= playList.length) {
        if (repeatCondition === "repeat-normal") {
          resetIndex();
        } else if (repeatCondition === "repeat-all") {
          resetIndex();
          player.play();
        }
      }
    }

    setTrack(player, playList, indexCurrent);
    player.play();
  };

  player.addEventListener("ended", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  nextBtn.addEventListener("click", () => {
    if (!playList || playList.length === 0) return;
    next();
  });

  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      next();
    });
  }
};
