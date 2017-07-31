import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Card from '../Card'

const styleSheet = createStyleSheet('App', {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    backgroundImage: `url(/assets/images/bg.jpg)`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
})

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      console.log('onload')
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Card />
      </div>
    )
  }
}

export default withStyles(styleSheet)(App)
