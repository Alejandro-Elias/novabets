import { listaReproduccion, progress } from "../modules/renderer.js";
import { playSelectItem } from "./buttons/play.js";
import { eliminarTrack } from "./eliminarTrack.js";
import { setindexCurrent } from "./indexCurrent.js";

export const selectPLayList = () => {
  listaReproduccion.addEventListener("click", async (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    const index = Number(button.dataset.index);
    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "seleccionar") {
      setindexCurrent(index);
      setTimeout(() => {
        progress.max = 100;
        progress.value = 0;
      }, 5);
      await playSelectItem();
    }
    if (action === "eliminar") {
      await eliminarTrack(id);
    }
  });
};
