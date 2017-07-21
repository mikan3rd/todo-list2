import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <h2>
        完了数：{this.props.countCompleted}　　
        残り：{this.props.countUncompleted}
      </h2>
    )
  }
}

export default Counter
