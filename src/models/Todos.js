import { Record, List } from 'immutable';
import Todo from './Todo';

const TodoListRecord = Record({
  todoList: List(),
}, 'TodoListRecord');

export default class Todos extends TodoListRecord {
  addTodo(action) {
    return this.set('todoList', this.todoList.push(new Todo({
      id: action.id,
      text: action.text,
    })))
  }
  toggleTodo(action) {
    const todoList = this.todoList.map(todo =>
      (todo.id === action.id)? todo.update('completed', completed => !todo.completed) : todo
    );
    return this.set('todoList', todoList);
  }
  deleteTodo(action) {
    const todoList = this.todoList.filter(todo => todo.id !== action.id);
    return this.set('todoList', todoList);
  }
}
