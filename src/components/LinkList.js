import React from 'react'
import Link from './Link'


class LinkList extends React.Component {

  render() {
    return(
      <p className='link-list'>
        Filter：　
        <Link>All</Link>　/　
        <Link>Active</Link>　/　
        <Link>Completed</Link>
      </p>
    );
  }

}

export default LinkList
