const { ipcMain } = require("electron");
const mm = require("music-metadata");
const path = require("path");

function registerIpc() {
  ipcMain.handle("get-metadata", async (_, songPath) => {
    if (!songPath) {
      return { title: "", artist: "", duration: "00:00", coverBuffer: null, mimeType: "" };
    }

      const metadata = await mm.parseFile(songPath);
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

      return {
        title: metadata.common.title || path.basename(songPath, path.extname(songPath)),
        artist: metadata.common.artist || 'Artista Desconocido',
        duration: `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}`,
        coverBuffer: coverBuffer, 
        mimeType: mimeType
      };
  });
}

module.exports = registerIpc;
