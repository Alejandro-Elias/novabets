const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1262,
    height: 292,
    resizable: false,
    autoHideMenuBar: true,
    frame: false,
    transparent: true,
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, "../preload.js"),
    },    
  });

  if (app.isPackaged) {
  win.webContents.on("before-input-event", (event, input) => {
    if (
      input.key === "F12" ||
      (input.control && input.shift && input.key.toLowerCase() === "i")
    ) {
      event.preventDefault();
    }
  });
}

  ipcMain.on("close-app", () => {
    app.quit();
  });
  ipcMain.on("minimizar", () => {
    win.minimize();
  });

  win.loadFile("./src/index.html");
};

module.exports = createWindow;
