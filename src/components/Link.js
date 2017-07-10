import React from 'react'
import PropTypes from 'prop-types'


class Link extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    filterTodo: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }
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
