import React, { Component } from 'react'
import Todo from './Todo'

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired
// }

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={() => this.props.toggleTodo(todo.id)}
      />
    )
    return(
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList
