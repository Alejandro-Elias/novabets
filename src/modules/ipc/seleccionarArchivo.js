const { ipcMain, dialog, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

let listaArchivos = [];

function archivoALista() {
  ipcMain.handle("seleccionar-archivos", async () => {
    const ventana = BrowserWindow.getFocusedWindow();

    const resultado = await dialog.showOpenDialog(ventana, {
      properties: ["openFile", "multiSelections"],
      filters: [{
        name: "Audio",
        extensions: ["mp3", "flac"]
      }]
    });

    if (resultado.canceled) {
      return [];
    }

    listaArchivos = [];

    
    for (const rutaCompleta of resultado.filePaths) {
      const nombreArchivo = path.basename(rutaCompleta)
      const rutaCarpeta = path.dirname(rutaCompleta)

      listaArchivos.push({
        carpeta: rutaCarpeta,
        archivo: nombreArchivo,
        ruta: rutaCompleta
      })
      
    } 
    
  });
}

function devolverArchivos() {
  ipcMain.handle("devolver-archivos", async () => {
    
    return listaArchivos;
  });
}

module.exports = {
  archivoALista,
  devolverArchivos,
};
