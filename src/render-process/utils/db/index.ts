import { ITodo } from './../../Model/Todo/index';
/**
 * db 模块
 */

import { ipcRenderer } from 'electron';

export enum DB_ACTION {
  ADD = "ADD",
  GET = "GET",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE"
}

const db = {
  add(todo: ITodo) {
    try {
      const { port1 } = new MessageChannel();
      ipcRenderer.postMessage(DB_ACTION.ADD, todo, [port1]);
    } catch (errr) {

    }
  }
}

export default db;