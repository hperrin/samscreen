const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#000',
    fullscreen: true,
    alwaysOnTop: true,
    resizable: false,
    movable: false,
    focusable: true,
    minimizable: false,
    maximizable: false,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('resources/mainscreen.html');

  win.setAlwaysOnTop(true, 'screen-saver', 0);
  win.removeMenu();

  win.on('closed', () => {
    app.quit();
  });

  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('browser-window-created', (_event, win) => {
  win.focus();
  win.webContents.focus();
});
