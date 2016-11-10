const {app, BrowserWindow} = require("electron");

let mainApp;

function createWindow() {
    let mainApp = new BrowserWindow({
        width: 1280,
        height: 720
    });

    mainApp.webContents.openDevTools();
    return mainApp;
}

app.on("ready", createWindow);
