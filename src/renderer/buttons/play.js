import { playBtn, player } from "../../renderer.js";
import { indexCurrent } from "../indexCurrent.js";
import { updateActiveTrack } from "../resaltarTrack.js";
import { setTrack } from "../setTrack.js";
import { loadList, playList } from "./play/loadList.js";

export const ejecutarPlay = async () => {
  loadList();

  if (!playList || playList.length === 0) {
    alert("debe seleccionar una carpeta primero");
    return;
  }

  if (!player.src || player.src === "") {
    await setTrack(player, playList, indexCurrent);
  }

  updateActiveTrack();
  player.play();
  playBtn.innerHTML = '<i class="fa-solid fa-circle-pause play i-color"></i>';
};

const ejecutarPause = () => {
  player.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
};

export const play = () => {
  loadList();

  playBtn.addEventListener("click", () => {
    if (player.paused) {
      ejecutarPlay();
    } else {
      ejecutarPause();
    }
  });

  navigator.mediaSession.setActionHandler("play", () => {
    ejecutarPlay();
    navigator.mediaSession.playbackState = "playing";
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    ejecutarPause();
    navigator.mediaSession.playbackState = "paused";
  });
};
