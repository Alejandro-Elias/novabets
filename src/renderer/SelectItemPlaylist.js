import { listaReproduccion, player } from "../renderer.js";
import { ejecutarPlay, play, playSelectItem } from "./buttons/play.js";
import { indexCurrent, setindexCurrent } from "./indexCurrent.js";
import { setTrack } from "./setTrack.js";

export const selectPLayList = () => {
  listaReproduccion.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    const index = Number(button.dataset.index);

    setindexCurrent(index);

    playSelectItem()
  });
};
