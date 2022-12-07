const {app, BrowserWindow}  = require('electron')
const isDev = require('electron-is-dev')
let mainWindow 

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl'
    mainWindow.loadURL(urlLocation)
})