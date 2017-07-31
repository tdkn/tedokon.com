import React from 'react'
import { render } from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  render(<App />, document.createElement('div'))
})
