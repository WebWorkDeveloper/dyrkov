const { app, BrowserWindow } = require('electron');

// Main process

const windowConfiguration = {
    width: 1200,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
    }
};

const openWindow = (configuration = {}) => {
    const windowInstance = new BrowserWindow(configuration);

    // In index.html start isolated render process
    windowInstance.loadFile('index.html');

    windowInstance.webContents.openDevTools();
};

app.whenReady().then(() => openWindow(windowConfiguration));

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        openWindow(windowConfiguration);
    }
});
