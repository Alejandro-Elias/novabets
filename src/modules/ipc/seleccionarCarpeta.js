const { ipcMain, dialog, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

let lista = [];

function carpetaALista() {
  ipcMain.handle("seleccionar-carpeta", async () => {
    const ventana = BrowserWindow.getFocusedWindow();

    const resultado = await dialog.showOpenDialog(ventana, {
      properties: ["openDirectory"],
    });

    if (resultado.canceled) return [];

    lista = [];

    const carpeta = resultado.filePaths[0];

    console.log("Carpeta elegida:", carpeta);
    console.log("Existe:", fs.existsSync(carpeta));

    console.warn("Carpeta seleccionada:", carpeta);
    console.warn("Existe carpeta?:", fs.existsSync(carpeta));

    if (!carpeta || !fs.existsSync(carpeta)) {
      console.warn(
        "Carpeta seleccionada no existe o no es accesible:",
        carpeta,
      );

      const fallback = await dialog.showOpenDialog(ventana, {
        properties: ["openFile", "multiSelections"],
        filters: [
          {
            name: "Audio",
            extensions: ["mp3", "flac"],
          },
        ],
      });

      if (fallback.canceled) return [];

      lista = fallback.filePaths.map((rutaCompleta) => ({
        carpeta: path.dirname(rutaCompleta),
        archivo: path.basename(rutaCompleta),
        ruta: rutaCompleta,
      }));

      return lista;
    }

    const leerCarpeta = (pathCarpeta) => {
      if (!pathCarpeta) return;

      let elementos;

      try {
        elementos = fs.readdirSync(pathCarpeta, {
          withFileTypes: true,
        });
      } catch (err) {
        console.warn(
          "No se pudo leer la carpeta seleccionada:",
          pathCarpeta,
          err?.code || err,
        );
        return;
      }

      for (const elemento of elementos) {
        const rutaCompleta = path.join(pathCarpeta, elemento.name);

        if (elemento.isDirectory()) {
          leerCarpeta(rutaCompleta);
          continue;
        }

        if (
          elemento.isFile() &&
          (elemento.name.endsWith(".mp3") || elemento.name.endsWith(".flac"))
        ) {
          lista.push({
            carpeta: pathCarpeta,
            archivo: elemento.name,
            ruta: rutaCompleta,
          });
        }
      }
    };

    try {
      leerCarpeta(carpeta);
    } catch (err) {
      console.warn("Error recorriendo la carpeta seleccionada:", carpeta, err);
    }

    return lista;
  });
}

function devolverLista() {
  ipcMain.handle("devolver-lista", async () => {
    return lista;
  });
}

module.exports = {
  carpetaALista,
  devolverLista,
};
