import React from 'react'
import { render } from 'react-dom'
import GithubButton from './GithubButton'

it('renders without crashing', () => {
  render(<GithubButton />, document.createElement('div'))
})
