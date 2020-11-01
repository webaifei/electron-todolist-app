import { ITodo } from './../render-process/Model/Todo/index';
import { ResultType } from './../enum/resultTypeEnum';

import { BrowserWindow, app , ipcMain} from 'electron';
import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { IpcMainEvent } from 'electron/main';

import { DB_ACTION } from './../render-process/utils/db/index';
import Result from '../models/Result';
import logger from '../utils';
import { values } from 'mobx';
const version = '1.0.0';
const adapter = new FileSync(path.resolve(__dirname,'../db/todoStore.json'))
const db = low(adapter)
const UNDEFINED = void 0;

const store = db.getState();

if(typeof store.todos === UNDEFINED) {
  db.defaults({ todos: [], version })
  .write();
}


export const createWindow = () => {
  // 处理 添加todo
  ipcMain.handle(DB_ACTION.ADD, async (event: IpcMainEvent, args: ITodo)=> {
    // 添加到lowdb
    try {
      // @ts-ignore
      db.get('todos').push(args).write();
      return Result.success<ITodo>(args);
    } catch (error) {
      logger.error('添加todo 到db 失败', error);
      return new Result<null>(ResultType.DB_ERROR, '添加db失败', null);
    }
  })
  ipcMain.handle(DB_ACTION.GET_TODOS, async (event: IpcMainEvent, args)=> {
    // 添加到lowdb
    try {
      // @ts-ignore
      const todos:ITodo[] = db.get('todos').value();
      return Result.success<ITodo[]>(todos);
    } catch (error) {
      logger.error('获取todos失败', error);
      return new Result<null>(ResultType.DB_ERROR, '获取todos失败', null);
    }
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
