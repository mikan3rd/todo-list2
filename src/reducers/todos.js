import Todos from '../models/Todos'

const todos = (state = new Todos(), action) => {
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
      return state.addTodo(action)

    case 'TOGGLE_TODO':
      return state.toggleTodo(action)

    case 'DELETE_TODO':
      return state.deleteTodo(action)

    case 'FETCH_TODOS_SUCCESS':
      return action.todos

    default:
      return state
  }
}

export default todos
