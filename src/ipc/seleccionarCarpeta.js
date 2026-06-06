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

    if (resultado.canceled) {
      return [];
    }

    lista = [];

    const carpeta = resultado.filePaths[0];

    const leerCarpeta = (pathCarpeta) => {
      const elementos = fs.readdirSync(pathCarpeta, {
        withFileTypes: true,
      });

      for (const elemento of elementos) {
        const rutaCompleta = path.join(pathCarpeta, elemento.name);

        if (elemento.isDirectory()) {
          leerCarpeta(rutaCompleta);
        }

        if (elemento.isFile() && elemento.name.endsWith(".mp3")) {
          lista.push({
            carpeta: pathCarpeta,
            archivo: elemento.name,
            ruta: rutaCompleta,
          });
        }
      }
    };

    leerCarpeta(carpeta);
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
