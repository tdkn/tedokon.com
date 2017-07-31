import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import TwitterButton from '../components/TwitterButton'
import GithubButton from '../components/GithubButton'
import InstagramButton from '../components/InstagramButton'
import MailButton from '../components/MailButton'
import Card from '../components/Card'

storiesOf('Button', module)
  .add('Twitter', () =>
    <TwitterButton onClick={action('clicked')} href={'#link'} />
  )
  .add('Github', () =>
    <GithubButton onClick={action('clicked')} href={'#link'} />
  )
  .add('Instagram', () =>
    <InstagramButton onClick={action('clicked')} href={'#link'} />
  )
  .add('Mail', () => <MailButton onClick={action('clicked')} href={'#link'} />)

storiesOf('Card', module).add('normal', () =>
  <Card onClick={action('clicked')} />
)
