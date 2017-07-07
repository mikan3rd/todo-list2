import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div className="form">
      <input
        ref={ node => {
          input = node
        }}
      />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>Todoを作成</button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
