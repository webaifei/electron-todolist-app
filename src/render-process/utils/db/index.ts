import { ITodo } from './../../Model/Todo/index';
/**
 * db 模块
 */

// type IResult = typeof Result;
import { ipcRenderer } from 'electron';
import Result from '../../../models/Result';

export enum DB_ACTION {
  ADD = "ADD",
  GET = "GET",
  GET_TODOS = 'GET_TODOS',
  REMOVE = "REMOVE",
  UPDATE = "UPDATE"
}

export const db = {
  async add(todo: ITodo) {
    const ret = await ipcRenderer.invoke(DB_ACTION.ADD, todo);
    console.log("add -> ret", ret)
    return ret;
  },
  async getTodos():Promise<ITodo[]> {
    const ret:Promise<Result<ITodo[]>> = await ipcRenderer.invoke(DB_ACTION.GET_TODOS);
    return (await ret).data;
  }
}

