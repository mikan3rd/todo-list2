const todos = (state = [], action) => {

  switch (action.type) {

    case 'ADD_TODO':
      if (!action.text) {
        alert("入力がありません")
        return state
      }
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          date: new Date()
        }
      ]

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
