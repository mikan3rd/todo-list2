import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, deleteTodo } from '../actions'
// import { initTodo } from '../actions'

const getFilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( todo => todo.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( todo => !todo.completed )
    default:
      return
  }
}

const mapStateToProps = (state) => {
  return { todos: getFilter(state.todos, state.filter) }
}

const mapDispatchToProps = dispatch => {
  return {
    // initTodo: () => dispatch(initTodo()),
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
