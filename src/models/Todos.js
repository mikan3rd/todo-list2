import { Record, List } from 'immutable';
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
  toggleTodo(action) {
    const todoList = this.todoList.map(todo =>
      (todo.id === action.id)? todo.update('completed', completed => !todo.completed) : todo
    );
    return this.set('todoList', todoList);
  }
}
