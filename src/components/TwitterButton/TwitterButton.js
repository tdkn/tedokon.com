import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import blueGrey from 'material-ui/colors/blueGrey'
import IconButton from 'material-ui/IconButton'
import TwitterIcon from 'react-icons/lib/io/social-twitter'

const styleSheet = createStyleSheet('TwitterButton', {
  svgIcon: {
    color: blueGrey[50]
  }
})

class TwitterButton extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, href } = this.props
    return (
      <IconButton href={href}>
        <TwitterIcon className={classes.svgIcon} />
      </IconButton>
    )
  }
}

export default withStyles(styleSheet)(TwitterButton)
