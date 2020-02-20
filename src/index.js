const { app, BrowserWindow } = require('electron');
// const { addModelUrl } = require('./teachable');

function createWindow() {
  let win = new BrowserWindow({
    width: 1920,
    height: 1280,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });
  win.loadFile('index.html');
  win.webContents.openDevTools();
}
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
