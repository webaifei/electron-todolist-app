import Todo, { ITodo } from './../../Model/Todo/index';
import { action, computed, observable } from 'mobx';

export enum FilterType {
  ALL,
  DONE,
  UNDONE,
}

/**
 * TodoStore
 */
export class TodoStore {
  @observable todoList: Array<ITodo> = [];
  @observable filterType: FilterType = FilterType.ALL;

  @computed
  get computedFilterdTodoList() {
    if(this.filterType === FilterType.UNDONE) {
      return this.todoList.filter((todo: ITodo)=> !todo.isDone);
    } else if(this.filterType === FilterType.DONE) {
      return this.todoList.filter((todo: ITodo)=> todo.isDone)
    } else {
      return this.todoList;
    }
  }
  /**
   * 添加todo
   * @param todo Itodo
   */
  @action
  addTodo(todo: ITodo) {
    this.todoList.push(todo);
  }

  /**
   * 标记完成
   * @param id ID
   */
  @action
  doneTodo(id: string) {
    this.todoList.forEach((todo: ITodo)=> {
      todo.id === id && (todo.isDone = true);
    })
  }
}
const todoStore = new TodoStore();
export default todoStore;