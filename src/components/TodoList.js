import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchData('data.json')
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
