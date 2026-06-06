const { app, protocol, BrowserWindow, net } = require("electron");

const { carpetaALista, devolverLista } = require("./ipc/seleccionarCarpeta");
const createWindow = require("./ipc/createWindow");
const registerIpc = require("./ipc/registerIpc");

protocol.registerSchemesAsPrivileged([
  { scheme: 'app-media', privileges: { secure: true, standard: true, supportFetchAPI: true } }
]);

app.whenReady().then(() => {

   protocol.handle('app-media', (request) => {
    try {
      const urlParsed = new URL(request.url);
      
      const decodedPath = decodeURIComponent(urlParsed.pathname);
      
      return net.fetch(`file://${decodedPath}`);
    } catch (error) {
      console.error("Error en el protocolo personalizado:", error);
      return new Response("Error al cargar recurso", { status: 500 });
    }
  });

  registerIpc();
  createWindow();
  carpetaALista();
  devolverLista();
});
