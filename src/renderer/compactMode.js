import { compactBtn } from "../modules/renderer.js";
import { novaBody } from "../modules/renderer.js";

let isCompact = false;

function animate(el, animation) {
  el.classList.remove("animate__animated", animation);

  void el.offsetWidth; // fuerza reflow

  el.classList.add("animate__animated", animation);
}

export const compactMode = () => {
  animate(novaBody, "animate__zoomIn");

  compactBtn.addEventListener("click", async () => {
    animate(novaBody, "animate__zoomIn");

    isCompact = !isCompact;

    await window.electronAPI.setCompactMode(isCompact);

    document.body.classList.toggle("compact");
  });
};
