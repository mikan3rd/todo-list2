import { combineReducers } from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import countCompleted from './countCompleted'
import { fetchError, loadTodos } from './asynchronous'

const todoApp = combineReducers({
  todos,
  filter,
  fetchError,
  loadTodos,
  countCompleted,
})
export default todoApp
