import Todos from '../models/Todos'

const todos = (state = new Todos(), action) => {
  console.log(state, action);
  switch (action.type) {

    case 'ADD_TODO':
      if (!action.text) {
        alert("入力がありません")
        return state
      }
      if (state.todoList.find(todo => todo.text === action.text)) {
        alert("同じtodoがあります")
        return state
      }
      const newState = state.addTodo(action);
      return newState

    case 'TOGGLE_TODO':
      return state.map( todo =>
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'FETCH_TODOS_SUCCESS':
      return action.todos

    default:
      return state
  }
}

export default todos
