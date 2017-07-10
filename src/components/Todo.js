import React, { PropTypes } from 'react'

const Todo = ({id, text, completed, onClick }) => (
  <li
  style={{textDecoration: completed? 'line-through' : 'none'}}
  onClick={onClick}
  >
    {id + 1}：{text}
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
