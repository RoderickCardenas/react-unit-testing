import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the test Learn React Testing', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react unit testing/i)
  expect(linkElement).toBeInTheDocument()
})
