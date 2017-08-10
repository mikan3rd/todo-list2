import { Record, List, Seq } from 'immutable';
import Todo from './Todo';

const TodoListRecord = Record({
  todoList: List(),
}, 'TodoListRecord');

export default class Todos extends TodoListRecord {

  getNextId(){
    let newNumber = 1;
    if(this.todoList.size !== 0){
      newNumber = Seq(this.todoList).map(x => x.get('id')).max() + 1;
    }
    return newNumber;
  }

  addTodo(action) {
    return this.set('todoList', this.todoList.push(new Todo({
      id: this.getNextId(),
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
  fetchTodos(action) {
    let firstNumber = 0;
    const todos = action.todos.map(todo => new Todo({ id: firstNumber++, text: todo.text}));
    const todoList = this.todoList.merge(todos);
    return this.set('todoList', todoList);
  }
}
