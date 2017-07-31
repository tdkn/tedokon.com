import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import blueGrey from 'material-ui/colors/blueGrey'
import GithubIcon from 'react-icons/lib/io/social-github'
import IconButton from 'material-ui/IconButton'

const styleSheet = createStyleSheet('GithubButton', {
  svgIcon: {
    color: blueGrey[50]
  }
})

class GithubButton extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, href } = this.props
    return (
      <IconButton href={href}>
        <GithubIcon className={classes.svgIcon} />
      </IconButton>
    )
  }
}

export default withStyles(styleSheet)(GithubButton)
