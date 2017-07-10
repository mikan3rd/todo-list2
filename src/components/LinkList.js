import React from 'react'
import FilterLink from '../containers/FilterLink'


class LinkList extends React.Component {

  render() {
    return(
      <p className='link-list'>
        Filter：　
        <FilterLink filter="SHOW_ALL">All</FilterLink>　/　
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>　/　
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </p>
    );
  }

}

export default LinkList
