// import Axios from 'axios';

let nextTodoId = 0;

// export const initTodo = () => {
//   return dispatch => {
//     const data = fetch('http://127.0.0.1:3000/data.json');
//     console.log(data)
//   }
// }

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
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
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
      .then((comments) => dispatch(fetchTodosSuccess(comments)))
      .catch(() => dispatch(fetchError(true)));
  }
}

// export function saveTodoList(data) {
//   return dispatch => {
//     dispatch(saveTodoListRequest());
//
//     Axios.post('/todo_list', data).then(
//       response => dispatch(saveTodoListResult(response.data.result))
//     ).catch(
//       () => dispatch(saveTodoListResult(false))
//     );
//   };
// }
//
// function saveTodoListRequest() {
//   return {
//     type: 'SAVE_LIST_AJAX_REQUEST',
//   };
// }
//
// function saveTodoListResult(result) {
//   return {
//     type: 'SAVE_LIST_AJAX_RESULT',
//     result,
//   };
// }
