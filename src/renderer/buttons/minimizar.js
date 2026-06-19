import { minimizar } from "../../modules/renderer.js";

export const minimizarBtn = () => {
  minimizar.addEventListener("click", () => {
    window.electronAPI.minimizar();
  });
};
