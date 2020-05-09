const electron = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new electron.BrowserWindow({
        webPreferences: {
            // Allow access to NodeJS APIs from this window.
            nodeIntegration: true,
        }
    })

    mainWindow.webContents.on('crashed', () => {
        console.log('app crashed')
        mainWindow.destroy()
        createWindow()
    })

    const index_file = `file://${path.join(__dirname, 'index.html')}`
    console.log(index_file)
    mainWindow.loadURL(index_file)

    mainWindow.webContents.openDevTools()
    mainWindow.show()
}

electron.app.on('ready', createWindow)

electron.app.on('window-all-closed', () => {
    electron.app.quit()
})
