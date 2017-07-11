import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


class TodoList extends React.Component {

  // componentDidMount() {
  //   this.props.initTodo();
  // }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func,
  }

  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={() => this.props.toggleTodo(todo.id)}
        deleteTodo={() => this.props.deleteTodo(todo.id)}
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
