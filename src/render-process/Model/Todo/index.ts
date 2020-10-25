/**
 * Todo
 */
import { observable } from 'mobx'

export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
  timestmp: Date
}
export default class Todo {
  @observable id;
  @observable text;
  @observable isDone;

  timestmp = Date.now();

  constructor(params:ITodo) {
    const {id, text, isDone} = params;
    this.id = id;
    this.text = text;
    this.isDone = isDone;
  }
}