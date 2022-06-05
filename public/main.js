const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        title: "My App",
        width: 1024,
        height: 768,
        minWidth: 1024,
        minHeight: 768,
        resizable: false,
        maximizable: false,
        autoHideMenuBar: true,
        menu: null,
        icon: __dirname + '/logo192.png',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })

    // and load the index.html of the app.
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})