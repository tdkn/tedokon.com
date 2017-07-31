import React from 'react'
import { render } from 'react-dom'
import Button from './Button'

it('renders without crashing', () => {
  render(<Button />, document.createElement('div'))
})
