import Axios from 'axios';

let nextTodoId = 0;

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

export const filterTodo = filter => {
  return {
    type: 'FILTER_TODO',
    filter
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
