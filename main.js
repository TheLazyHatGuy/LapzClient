const {app, BrowserWindow} = require("electron");
//require(__dirname + "/app/static/js/components.js");

var win = null;

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
});
