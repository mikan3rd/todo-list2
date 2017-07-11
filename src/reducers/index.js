import { combineReducers } from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import * as asynchronous from './asynchronous'

const todoApp = combineReducers({
  todos,
  filter,
  asynchronous,
})
export default todoApp
