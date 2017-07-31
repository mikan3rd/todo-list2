import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    const {
      id,
      text,
      completed,
      date,
      toggleTodo,
      deleteTodo,
    } = this.props;

    const link = completed? '元に戻す' : '完了！';
    const className = completed? 'done' : 'undone';
    const todoDelete = completed? '削除' : '';
    var dateFixed = ''
    if (date) {
      dateFixed = date.getHours() + '時' + date.getMinutes() + '分' + date.getSeconds() + '秒' ;
    }
    return(
      <li className={className}>
        <p className="content">{id + 1}：{text}</p>
        <div className='button'>
          <span className='date'>{dateFixed}</span>　
          <a href="" onClick={(e) => {e.preventDefault(); toggleTodo()}}>{link}</a>　
          <a href="" onClick={(e) => {e.preventDefault(); deleteTodo()}}>{todoDelete}</a><br/>
        </div>
      </li>
    );
  }

}

export default Todo
