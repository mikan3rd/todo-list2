import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = state => {
  return {
    countCompleted: state.countCompleted
  }
}

const CountCompleted = connect(
  mapStateToProps
)(Counter)

export default CountCompleted
