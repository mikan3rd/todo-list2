import { combineReducers } from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import { fetchError, loadTodos, getTodos } from './asynchronous'

const todoApp = combineReducers({
  todos,
  filter,
  fetchError,
  loadTodos,
  getTodos,
})
export default todoApp
