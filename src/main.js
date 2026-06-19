const { app, protocol, BrowserWindow, net } = require("electron");

const {
  carpetaALista,
  devolverLista,
} = require("./modules/ipc/seleccionarCarpeta");
const createWindow = require("./modules/ipc/createWindow");
const registerIpc = require("./modules/ipc/registerIpc");
const {
  archivoALista,
  devolverArchivos,
} = require("./modules/ipc/seleccionarArchivo");

app.whenReady().then(() => {
  registerIpc();
  createWindow();
  carpetaALista();
  devolverLista();
  archivoALista();
  devolverArchivos();
});
