const {app, BrowserWindow} = require("electron");

var win = null;

app.on("ready", function () {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            devTools: true
        }
    });
    win.loadURL(`file://${__dirname}/app/static/html/index.html`);
});
