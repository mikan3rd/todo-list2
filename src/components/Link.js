import React from 'react'
import PropTypes from 'prop-types'


class Link extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return(
      <a href='#'>{this.props.children}</a>
    );
  }

}

export default Link
