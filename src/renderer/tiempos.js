import { getCurrent } from "./currentTrack.js";

export const tiempos = (player, progress, time) => {
  let metadatos = getCurrent();

  let fullTime = metadatos.metadata.duration;

  player.addEventListener("timeupdate", () => {
    const duration = player.duration;

    const currentTime = player.currentTime;

    const progressPercent = (currentTime / duration) * 100;

    progress.value = progressPercent;
  });

  player.addEventListener("timeupdate", () => {
    const segundos = player.currentTime;

    const minutos = Math.floor(segundos / 60);
    const restoSegundos = Math.floor(segundos % 60);
    time.innerText = `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")} / ${fullTime}`;

    progress.addEventListener("input", () => {
      const duration = player.duration;

      player.currentTime = (progress.value / 100) * duration;
    });
  });
};
