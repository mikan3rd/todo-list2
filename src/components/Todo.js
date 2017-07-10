import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    const link = this.props.completed? '元に戻す' : '完了！';
    const className = this.props.completed? 'done' : 'undone';
    const todoDelete = this.props.completed? '削除' : '';
    return(
      <li className={className}>
        <span className="content">{this.props.id + 1}：{this.props.text}</span>
        <a href="" onClick={(e) => {e.preventDefault(); this.props.toggleTodo()}} className='button'>{link}</a>　　
        <a href="" onClick={(e) => {e.preventDefault(); this.props.deleteTodo()}} className='button'>{todoDelete}</a><br/>
      </li>
    );
  }

}

export default Todo
