import React from 'react'
import PropTypes from 'prop-types'


class Link extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return(
      <a href=""
        onClick={(e) => {
          e.preventDefault();
          this.props.filterTodo();
        }}
      >
        {this.props.children}
      </a>
    );
  }

}

export default Link
