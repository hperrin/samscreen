const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  hideCursor: () => ipcRenderer.send('hide-cursor'),
});
