import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo }) => (
  <ul>
    {todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
