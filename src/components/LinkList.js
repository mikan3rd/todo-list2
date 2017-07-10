import React from 'react'
import Link from './Link'
import FilterLink from '../containers/FilterLink'


class LinkList extends React.Component {

  render() {
    return(
      <p className='link-list'>
        Filter：　
        <FilterLink>All</FilterLink>　/　
        <FilterLink>Active</FilterLink>　/　
        <FilterLink>Completed</FilterLink>
      </p>
    );
  }

}

export default LinkList
