const { ipcMain } = require("electron");
const mm = require("music-metadata");
const path = require("path");

function registerIpc() {
  ipcMain.handle("get-metadata", async (_, playList) => {
    if (playList.length <= 0) {
      return;
    }

    let metadatos = [];

    if (playList.length > 0) {
      for (const song of playList) {
        const metadata = await mm.parseFile(song.track.ruta);
        const picture = metadata.common.picture?.[0];

        let coverBuffer = null;
        let mimeType = "";

        if (picture) {
          coverBuffer = picture.data;
          mimeType = picture.format || "image/jpeg";
        }

        const segundos = metadata.format.duration || 0;
        const minutos = Math.floor(segundos / 60);
        const restoSegundos = Math.floor(segundos % 60);

        metadatos.push({
          id: song.id,
          title:
            metadata.common.title ||
            path.basename(song.track.ruta, path.extname(song.track.ruta)),
          artist: metadata.common.artist || "Artista Desconocido",
          duration: `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}`,
          coverBuffer: coverBuffer,
          mimeType: mimeType,
        });
      }

    return metadatos;
    }
  });
}

module.exports = registerIpc;
