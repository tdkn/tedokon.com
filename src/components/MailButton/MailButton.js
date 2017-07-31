import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import blueGrey from 'material-ui/colors/blueGrey'
import IconButton from 'material-ui/IconButton'
import MailIcon from 'react-icons/lib/io/paper-airplane'

const styleSheet = createStyleSheet('MailButton', {
  svgIcon: {
    color: blueGrey[50]
  }
})

class MailButton extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, href } = this.props
    return (
      <IconButton href={href}>
        <MailIcon className={classes.svgIcon} />
      </IconButton>
    )
  }
}

export default withStyles(styleSheet)(MailButton)
