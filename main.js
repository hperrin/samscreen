const os = require('os');
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const ffi = require('@tigerconnect/ffi-napi');

const user32 = ffi.Library('user32', {
  ShowCursor: ['uint32', ['bool']],
  PostMessageW: ['bool', ['int32', 'uint32', 'uint32', 'uint32']],
});

const kernel32 = ffi.Library('Kernel32', {
  GetLastError: ['uint32', []],
});

const WM_SETCURSOR = 32;

function getNative32(handle) {
  if (os.endianness() == 'LE') {
    return handle.readInt32LE();
  } else {
    return handle.readInt32BE();
  }
}

ipcMain.on('hide-cursor', (event) => {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);

  if (
    !user32.PostMessageW(
      getNative32(win.getNativeWindowHandle()),
      WM_SETCURSOR,
      0,
      0
    )
  ) {
    console.log('Error: ', kernel32.GetLastError());
  }

  win.focus();
  win.webContents.focus();
});

const createWindow = async () => {
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

  win.hookWindowMessage(WM_SETCURSOR, (_wParam, _lParam) => {
    // console.log('Params:', getNative32(wParam), getNative32(lParam));
    user32.ShowCursor(false);
    return true;
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
  return createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});
