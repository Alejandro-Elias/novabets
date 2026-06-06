const { ipcMain } = require("electron");
const mm = require("music-metadata");
const path = require("path");
const fs = require("fs");
const os = require("os");

function registerIpc() {
  ipcMain.handle("get-metadata", async (_, songPath) => {

    if (!songPath) {
  return {
    title: "",
    artist: "",
    duration: "00:00",
    cover: "./image/novaPortada.png"
  };
}

    const metadata = await mm.parseFile(songPath);

    const picture = metadata.common.picture?.[0];

    let cover = "";

    if (picture) {
      const tempCoverPath = path.join(os.tmpdir(), `${Date.now()}-cover.jpg`);

      fs.writeFileSync(tempCoverPath, picture.data);

      cover = tempCoverPath;
    }

    const segundos = metadata.format.duration;

    const minutos = Math.floor(segundos / 60);
    const restoSegundos = Math.floor(segundos % 60);
    

    return {
      title: metadata.common.title || '',
      artist: metadata.common.artist || '',
      duration: `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}` || '00.00,',
      durationMs: metadata.format.duration,
      cover: cover ,
    };
  });
}

module.exports = registerIpc;
