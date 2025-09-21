import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../../../App'

test('renders learn react link', () => {
  render(<App />)
  // screen.logTestingPlaygroundURL()
  const linkElement = screen.getByText(/Learn React/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders learn react link', () => {
  render(<App />)
  // screen.logTestingPlaygroundURL()
  const paraElement = screen.getByText(/Code Step By Step/i)
  expect(paraElement).toBeInTheDocument()
})
