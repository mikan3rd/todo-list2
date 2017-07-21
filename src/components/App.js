import React from 'react'
import AddTodo from '../containers/AddTodo'
import CountCompleted from '../containers/CountCompleted'
import LinkList from './LinkList'
import VisibleTodoList from '../containers/VisibleTodoList'


class App extends React.Component {

  render() {
    return(
      <div className="container">
        <h1>ReduxでTodoアプリ</h1>
        <CountCompleted />
        <AddTodo />
        <LinkList />
        <h2><VisibleTodoList /></h2>
      </div>
    );
  }

}

export default App
