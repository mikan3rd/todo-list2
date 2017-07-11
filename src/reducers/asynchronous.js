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

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.todos;
    default:
      return state;
  }
}
