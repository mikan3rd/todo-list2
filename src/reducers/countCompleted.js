const countCompleted = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
    if (!action.completed) {
      return state + 1
    } else {
      return state - 1
    }
    default:
      return state
  }
}

export default countCompleted
