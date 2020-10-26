import { DB_ACTION } from './../render-process/utils/db/index';
import { BrowserWindow, app , ipcMain} from 'electron';
import { IpcMainEvent } from 'electron/main';

export const createWindow = () => {
  ipcMain.on(DB_ACTION.ADD, (event: IpcMainEvent, args)=> {
    console.log("createWindow -> args", args)
  })
  const win = new BrowserWindow({
    show: true,
    width: 890,
    height: 556,
    resizable: true, // 禁止窗口缩小放大，暂时避免因此对录屏造成的影响。
    // @ts-ignore
    webgl: true,
    frame: true,
    transparent: false,
    webPreferences: {
      webSecurity: true,
      allowRunningInsecureContent: false,
      nativeWindowOpen: false,
      nodeIntegration: true,
      // preload: `http://localhost:1212/dist/preload${app.isPackaged ? '.prod' : '.dev'}.js`,
    },
  });
  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/../index.html`);


};
