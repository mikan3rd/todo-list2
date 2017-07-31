import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


class TodoList extends React.Component {

  static propTypes = {
    // todos: PropTypes.arrayOf(PropTypes.shape({
    //   id: PropTypes.number.isRequired,
    //   text: PropTypes.string.isRequired
    // }).isRequired).isRequired,
    todos: PropTypes.object,
    toggleTodo: PropTypes.func,
  }



  render() {

    if (this.props.hasError) {
      return <p>error</p>;
    }
    if (this.props.isLoading) {
      return <p>loading . . . </p>;
    }

    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        toggleTodo={() => this.props.toggleTodo(todo.id, todo.completed)}
        deleteTodo={() => this.props.deleteTodo(todo.id)}
      />
    )

    return(
      <ul>
        {todos}
      </ul>
    )
  }

}

export default TodoList
