import React, { PropTypes } from 'react'

const Todo = ({id, text}) => (
  <li>
    {id + 1}：{text}
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
