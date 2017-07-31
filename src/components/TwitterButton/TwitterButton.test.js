import React from 'react'
import { render } from 'react-dom'
import TwitterButton from './TwitterButton'

it('renders without crashing', () => {
  render(<TwitterButton />, document.createElement('div'))
})
