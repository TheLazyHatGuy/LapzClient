<<<<<<< HEAD
const {app, BrowserWindow} = require("electron");
//require(__dirname + "/app/static/js/components.js");
=======
import { app, BrowserWindow } from "electron";
>>>>>>> refs/remotes/GetRektByMe/dev

// Global reference so it doesn't get GC'd
var win;

app.on("ready", function () {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        webPreferences: {
            devTools: true
        }
    });
    win.loadURL(`file://${__dirname}/app/static/html/index.html`);
    win.webContents.openDevTools();
});
process.exit(0);
