import {app, BrowserWindow, ipcMain } from 'electron';
import {Something} from './Backend/Something';


export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow.destroy();
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ 
            width: 1200, 
            height: 800,
            webPreferences: {
                nodeIntegration: true
              }
        });
        Main.mainWindow.maximize();
        Main.mainWindow.loadURL('file://' + __dirname + '/Frontend/index.html');
        Main.mainWindow.on('closed', Main.onClose);
     
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);

    }
}

ipcMain.handle('/Something', async(event, arg)  => {
     return Something.GetSomethings();
  });

Main.main(app, BrowserWindow);