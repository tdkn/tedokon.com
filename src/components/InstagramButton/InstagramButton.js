import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import blueGrey from 'material-ui/colors/blueGrey'
import InstagramIcon from 'react-icons/lib/io/social-instagram'
import IconButton from 'material-ui/IconButton'

const styleSheet = createStyleSheet('InstagramButton', {
  svgIcon: {
    color: blueGrey[50]
  }
})

class InstagramButton extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, href } = this.props
    return (
      <IconButton href={href}>
        <InstagramIcon className={classes.svgIcon} />
      </IconButton>
    )
  }
}

export default withStyles(styleSheet)(InstagramButton)
