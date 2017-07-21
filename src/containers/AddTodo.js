import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends React.Component {

  render() {
    let input;
    return(
      <div className="form">
        <input
          ref={ node => {
            input = node
          }}
        /><br/>
        <button onClick={() => {
          this.props.dispatch(addTodo(input.value))
        }}>Todoを作成</button>
      </div>
    );
  }

}

AddTodo = connect()(AddTodo)

export default AddTodo
