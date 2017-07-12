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
    const date = this.props.date
    var dateFixed = ''
    if (this.props.date) {
      dateFixed = date.getHours() + '時' + date.getMinutes() + '分' + date.getSeconds() + '秒' ;
    }
    return(
      <li className={className}>
        <p className="content">{this.props.id + 1}：{this.props.text}</p>
        <div className='button'>
          <span className='date'>{dateFixed}</span>　
          <a href="" onClick={(e) => {e.preventDefault(); this.props.toggleTodo()}}>{link}</a>　
          <a href="" onClick={(e) => {e.preventDefault(); this.props.deleteTodo()}}>{todoDelete}</a><br/>
        </div>
      </li>
    );
  }

}

export default Todo
