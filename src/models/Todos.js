import { Record, List, fromJS } from 'immutable';
import Todo from './Todo';

const TodoListRecord = Record({
  todoList: List(),
}, 'TodoListRecord');

export default class Todos extends TodoListRecord {
  addTodo(action) {
    const newTodos = this.set('todoList', this.todoList.push(new Todo({
      id: action.id,
      text: action.text,
    })))
    return newTodos;
  }
}
