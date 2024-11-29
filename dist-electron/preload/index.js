"use strict";

const n = require("electron");

n.contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (e, ...t) => n.ipcRenderer.send(e, ...t),
  on: (e, t) => n.ipcRenderer.on(e, t),
  once: (e, t) => n.ipcRenderer.once(e, t),
  removeListener: (e, t) => n.ipcRenderer.removeListener(e, t),
  removeAllListeners: (e) => n.ipcRenderer.removeAllListeners(e),
});
