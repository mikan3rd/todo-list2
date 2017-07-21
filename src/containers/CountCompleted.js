import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = state => {
  let countUncompleted = 0
  state.todos.forEach((todo) => {
    if (todo.completed === false) {
      countUncompleted++
    }
  })
  return {
    countCompleted: state.countCompleted,
    countUncompleted: countUncompleted
  }
}

const CountCompleted = connect(
  mapStateToProps
)(Counter)

export default CountCompleted
