import { connect } from 'react-redux'
import { filterTodo } from '../actions'
import Link from '../components/Link'


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterTodo: () => {dispatch(filterTodo(ownProps.filter))}
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
