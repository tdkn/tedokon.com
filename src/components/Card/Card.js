import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import BaseCard, { CardContent } from 'material-ui/Card'
import TwitterButton from '../TwitterButton'
import GithubButton from '../GithubButton'
import InstagramButton from '../InstagramButton'
import MailButton from '../MailButton'
import Typography from 'material-ui/Typography'
import Gravatar from 'react-gravatar'
import Hidden from 'material-ui/Hidden'

const styleSheet = createStyleSheet('Card', theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    display: 'flex',
    backgroundColor: 'transparent'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  cover: {
    width: 180,
    height: 180
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  icon: {
    fill: 'currentColor',
    display: 'inline-block',
    width: 24,
    height: 24
  }
}))

class Card extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props
    const name = 'Shun Tedokon'
    const subheader = [
      'Web & iOS Developer in Okinawa, Japan.',
      'I love Node.js and Swift.'
    ]
    return (
      <div className={classes.container}>
        <BaseCard className={classes.card}>
          <Hidden mdDown>
            <div className={classes.cover}>
              <Gravatar
                size={300}
                email="web@tedokon.com"
                className={classes.image}
              />
            </div>
          </Hidden>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">Shun Tedokon</Typography>
              <Typography type="subheading" color="secondary">
                Web & iOS Developer in Okinawa, Japan.
              </Typography>
              <Typography type="subheading" color="secondary">
                I love Node.js and Swift.
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <TwitterButton href={'https://twitter.com/@tdkn_'} />
              <GithubButton href={'https://github.com/tdkn'} />
              <InstagramButton href={'https://www.instagram.com/tdkn_/'} />
              <MailButton href={'mailto:web@tedokon.com'} />
            </div>
          </div>
        </BaseCard>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Card)
