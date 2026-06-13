import { getStorage } from "../localStorage.js";

export const updateActiveTrack = () => {
  const indexCurrent = getStorage("indexCurrent");
  const tracks = document.querySelectorAll(".track");

  const listaNueva = getStorage("listaNueva");

  if (listaNueva) {
    return;
  }

  tracks.forEach((track, index) => {
    track.classList.toggle("active", index === indexCurrent);
  });

  const active = document.querySelector(".active");

  active?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
};
