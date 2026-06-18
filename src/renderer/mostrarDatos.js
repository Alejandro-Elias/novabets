import { artistEl, imgCover, titleEl } from "../renderer.js";
import { getCurrent } from "./currentTrack.js";

let urlImagenActual = null;

export const mostrarMetadata = () => {
  const metadatos = getCurrent();

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
      imgCover.src = "./image/novaPortada.png";
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

    titleEl.textContent = metadatos.metadata.title || "NovaBets";
    artistEl.textContent = metadatos.metadata.artist || "Music Player";

    navigator.mediaSession.playbackState = "playing";
  }
};
