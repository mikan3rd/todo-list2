import { combineReducers } from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import { fetchError, loadTodos } from './asynchronous'

const todoApp = combineReducers({
  todos,
  filter,
  fetchError,
  loadTodos,
})
export default todoApp
