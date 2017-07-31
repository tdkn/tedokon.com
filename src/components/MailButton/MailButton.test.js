import React from 'react'
import { render } from 'react-dom'
import MailButton from './MailButton'

it('renders without crashing', () => {
  render(<MailButton />, document.createElement('div'))
})
