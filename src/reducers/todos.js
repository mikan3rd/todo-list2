const todos = (state = [], action) => {

  switch (action.type) {

    case 'ADD_TODO':
    console.log(state)
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
    console.log(action.todos.map(todo => todo.text))
      return action.todos

    default:
      return state
  }
}

export default todos
