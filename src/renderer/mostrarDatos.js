import { artistEl, artistElDuplicado, artistElTriplicado, imgCover, titleEl, titleElDuplicado, titleElTriplicado } from "../modules/renderer.js";
import { getCurrent } from "./currentTrack.js";

let urlImagenActual = null;

export const mostrarMetadata = () => {
  const metadatos = getCurrent();

  requestAnimationFrame(() => {
    const ancho = document.querySelector('.textos-titulos').scrollWidth;

    const duracion = Math.max(15, ancho / 50);

    document.querySelector('.textos-titulos')
        .style.animationDuration = `${duracion}s`;
});

  if (metadatos || metadatos.length > 0) {
    document.title = `${metadatos.metadata.artist} - ${metadatos.metadata.title}`;

    if (urlImagenActual) {
      URL.revokeObjectURL(urlImagenActual);
      urlImagenActual = null;
    }

    if (metadatos.metadata.coverBuffer) {
      const blob = new Blob([metadatos.metadata.coverBuffer], {
        type: metadatos.metadata.mimeType,
      });
      urlImagenActual = URL.createObjectURL(blob);

      imgCover.src = urlImagenActual;
    } else {
      imgCover.src = "./assets/images/novaPortada.png";
    }

    if ("mediaSession" in navigator) {
      const artworkArray = urlImagenActual
        ? [
            {
              src: urlImagenActual,
              sizes: "512x512",
              type: metadatos.metadata.mimeType || "image/jpeg",
            },
          ]
        : [];

      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadatos.metadata.title || "Canción Desconocida",
        artist: metadatos.metadata.artist || "Artista Desconocido",
        artwork: artworkArray,
      });
    }

    titleEl.textContent = metadatos.metadata.title || "NovaBeats";
    artistEl.textContent = metadatos.metadata.artist || "Music Player";
    titleElDuplicado.textContent = metadatos.metadata.title || "NovaBeats";
    artistElDuplicado.textContent = metadatos.metadata.artist || "Music Player";
    artistEl.textContent = metadatos.metadata.artist || "Music Player";
    titleElTriplicado.textContent = metadatos.metadata.title || "NovaBeats";
    artistElTriplicado.textContent = metadatos.metadata.artist || "Music Player";

    navigator.mediaSession.playbackState = "playing";
  }
};