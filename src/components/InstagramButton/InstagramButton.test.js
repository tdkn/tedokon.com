import React from 'react'
import { render } from 'react-dom'
import InstagramButton from './InstagramButton'

it('renders without crashing', () => {
  render(<InstagramButton />, document.createElement('div'))
})
