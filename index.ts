const { app, BrowserWindow, dialog, ipcMain } = require("electron");
// import path from "path";
// import fs from "fs";

function createWindow() {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      minWidth: 1000,
      minHeight: 800,
      titleBarStyle: "hiddenInset",
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      title: "Wax Envelope",
    });
    return win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
