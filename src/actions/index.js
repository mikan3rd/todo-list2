export const fetchError = status => {
  return {
    type: 'FETCH_ERROR',
    hasError: status
  }
}

export const loadTodos = status => {
  return {
    type: 'LOAD_TODOS',
    isLoading: status
  }
}

export const fetchTodosSuccess = todos => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos
  }
}

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const toggleTodo = (id, completed) => {
  return {
    type: 'TOGGLE_TODO',
    id,
    completed,
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const filterTodo = filter => {
  return {
    type: 'FILTER_TODO',
    filter
  }
}

export const fetchTodos = url => {
  return (dispatch) => {
    dispatch(loadTodos(true));
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadTodos(false));

        return response;
      })
      .then((response) => response.json())
      .then((todos) => dispatch(fetchTodosSuccess(todos)))
      .catch(() => dispatch(fetchError(true)));
  }
}
