'use strict'

const n = require('electron'),
    w = require('node:os'),
    r = require('node:path'),
    h = require('node:url'),
    _ = require('electron-updater'),
    m = require('child_process')
const path = require('node:path')
const fs = require('node:fs')

var a = typeof document < 'u' ? document.currentScript : null

const { autoUpdater: s } = _,
    E = h.fileURLToPath(
        typeof document > 'u'
            ? require('url').pathToFileURL(__filename).href
            : (a && a.src) || new URL('index.js', document.baseURI).href
    ),
    l = r.dirname(E)

process.env.DIST_ELECTRON = r.join(l, '..')

process.env.DIST = r.join(process.env.DIST_ELECTRON, '../dist')

process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? r.join(process.env.DIST_ELECTRON, '../public')
    : process.env.DIST

w.release().startsWith('6.1') && n.app.disableHardwareAcceleration()

process.platform === 'win32' && n.app.setAppUserModelId(n.app.getName())

n.app.requestSingleInstanceLock() || (n.app.quit(), process.exit(0))

let e = null

const d = r.join(l, '../preload/index.js'),
    p = process.env.VITE_DEV_SERVER_URL,
    u = r.join(process.env.DIST, 'index.html')

async function f() {
    e = new n.BrowserWindow({
        title: 'Main window',
        icon: r.join(process.env.VITE_PUBLIC, 'favicon.ico'),
        webPreferences: {
            preload: d,
        },
        autoHideMenuBar: !0,
    })

    e.webContents.on('did-start-loading', () => {
        const addonsPath = path.dirname(__dirname) + '/addons'
        if (fs.existsSync(addonsPath)) {
            fs.readdirSync(addonsPath).forEach((file) => {
                if (file.endsWith('.js')) {
                    const filePath = path.join(addonsPath, file)
                    e.webContents
                        .executeJavaScript(
                            `
                fetch('${filePath}')
                    .then(response => response.text())
                    .then(code => {
                        eval(code);
                    });
              `
                        )
                        .catch((err) =>
                            console.error(`加载脚本 ${file} 失败:`, err)
                        )
                }
            })
        }
    })
    process.env.VITE_DEV_SERVER_URL
        ? (e.loadURL(p), e.webContents.openDevTools())
        : e.loadFile(u),
        e.webContents.on('did-finish-load', () => {
            e == null ||
                e.webContents.send(
                    'main-process-message',
                    new Date().toLocaleString()
                )
        })
    e.webContents.setWindowOpenHandler(
        ({ url: o }) => (
            o.startsWith('https:') && n.shell.openExternal(o),
            {
                action: 'deny',
            }
        )
    ),
        n.ipcMain.on('check-remote-control', () => {
            R()
        }),
        n.ipcMain.on('check-displays', () => {
            const o = n.screen.getAllDisplays()
            e.webContents.send('check-displays-check-result', o)
        }),
        n.ipcMain.on('enter-full-screen', () => {
            e.setFullScreen(!0)
        })
}

function R() {
    e.webContents.send('remote-control-check-result', '')
}

n.app.whenReady().then(f)

n.app.on('window-all-closed', () => {
    ;(e = null), process.platform !== 'darwin' && n.app.quit()
})

n.app.on('second-instance', () => {
    e && (e.isMinimized() && e.restore(), e.focus())
})

n.app.on('activate', () => {
    const o = n.BrowserWindow.getAllWindows()
    o.length ? o[0].focus() : f()
})

n.ipcMain.handle('open-win', (o, t) => {
    const c = new n.BrowserWindow({
        webPreferences: {
            preload: d,
            nodeIntegration: !0,
            contextIsolation: !1,
        },
    })
    process.env.VITE_DEV_SERVER_URL
        ? c.loadURL(`${p}#${t}`)
        : c.loadFile(u, {
              hash: t,
          })
})

s.autoDownload = !1

const v = '/smartexam/clientVersion/getExamClient'

s.on('error', function (o) {
    i(-1, o)
})

s.on('checking-for-update', function () {
    i(0)
})

s.on('update-available', function () {
    i(1)
})

s.on('update-not-available', function () {
    i(2)
})

s.on('download-progress', (o) => {
    i(3, o)
})

s.on('update-downloaded', () => {
    i(4)
})

n.ipcMain.on('checkForUpdate', (o, t) => {
    s.setFeedURL(t + v), s.checkForUpdates()
})

n.ipcMain.on('confirm-update', () => {
    s.quitAndInstall()
})

n.ipcMain.on('confirm-downloadUpdate', () => {
    s.downloadUpdate()
})

function i(o, t) {
    e.webContents.send('message', o, t)
}
