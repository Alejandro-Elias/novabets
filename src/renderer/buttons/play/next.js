import { getStorage, setStorage } from "../../../modules/localStorage.js";
import {
  player,
  playBtn,
  progress,
  nextBtn,
} from "../../../modules/renderer.js";
import {
  indexCurrent,
  nextIndex,
  resetIndex,
  setindexCurrent,
} from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { setTrack } from "../../setTrack.js";
import { ejecutarPlay } from "../play.js";
import { loadList, playList } from "./loadList.js";

let repeatCondition = "repeat-normal";
let indiceActualizado = indexCurrent;

export const setRepeatCondition = (condition) => {
  repeatCondition = condition;
};

export const nextTrack = () => {
  const next = () => {
    const listaNueva = getStorage("listaNueva");
    if (listaNueva) {
      resetIndex();
      setStorage("indexCurrent", 0);
      setStorage("listaNueva", false);
      indiceActualizado = getStorage("indexCurrent");
      loadList();
      updateActiveTrack();
    } else {
      if (repeatCondition === "repeat-one") {
      } else {
        nextIndex();
      }

      indiceActualizado = getStorage("indexCurrent") ?? indexCurrent;

      if (indiceActualizado >= playList.length) {
        if (repeatCondition === "repeat-normal") {
          player.pause();
          playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
          setTimeout(() => {
            progress.max = 100;
            progress.value = 0;
          }, 5);
          return;
        } else if (repeatCondition === "repeat-all") {
          resetIndex();
          localStorage.setItem("indexCurrent", 0);
        }
      }
    }

    indiceActualizado = getStorage("indexCurrent") || indexCurrent;

    setTrack(player, playList, indiceActualizado);
    setTimeout(() => {
      progress.value = 0;
    }, 5);
    ejecutarPlay();
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
      if (!playList || playList.length === 0) return;
      next();
    });
  }
};
