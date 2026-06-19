import { getStorage } from "../modules/localStorage.js";
import { getCurrent } from "./currentTrack.js";

export const updateActiveTrack = () => {
  const indexCurrent = getStorage("indexCurrent");
  const tracks = document.querySelectorAll(".track");

  const listaNueva = getStorage("listaNueva");

  if (listaNueva) {
    return;
  }

  const trackActual = getCurrent();
  const idActual = trackActual.id;

  tracks.forEach((track, index) => {
    track.classList.toggle("active", idActual === Number(track.dataset.id));
  });

  const active = document.querySelector(".active");

  active?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
};
