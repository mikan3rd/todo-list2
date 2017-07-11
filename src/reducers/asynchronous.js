export const fetchError = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      return action.hasError;
    default:
      return state;
  }
}

export const loadTodos = (state = false, action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.isLoading;
    default:
      return state;
  }
}

export const getTodos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      const todos = state.slice()
      action.todos.map(todo =>
        todos.push({
          id: todo.id,
          text: todo.text,
          completed: todo.completed
        })
      )
      console.log(todos)
      return [

      ]
    default:
      return state;
  }
}
