import React, { Component } from 'react'



const Todo = ({id, text, completed, onClick }) => (
  <li style={{textDecoration: completed? 'line-through' : 'none'}}
  >
    {id + 1}：{text}　　<a href="#" onClick={onClick}></a>
  </li>
)

export default class from extends Component {
  render() {
    const link = this.props.completed? '元に戻す' : '完了！';
    const className = this.props.completed? 'done' : 'undone';
    const todoDelete = this.props.completed? '削除' : '';
    console.log(this.props);
    return(
      <li className={className}>
        <span>{this.props.id + 1}</span>
        <span>：{this.props.text}　　</span>
        <a href="#" onClick={() => this.props.toggleTodo()}>{link}</a>　　
        <a href="#" onClick={() => this.props.deleteTodoState(this.props)}>{todoDelete}</a><br/>
      </li>
    );
  }

}
