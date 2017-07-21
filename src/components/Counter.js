import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <h2>完了数：{this.props.countCompleted}</h2>
    )
  }
}

export default Counter
