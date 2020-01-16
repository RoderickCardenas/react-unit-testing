import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import addTwo from './Functions'
import ReactDOM from 'react-dom'

test('renders the test Learn React Testing', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react unit testing/i)
  expect(linkElement).toBeInTheDocument()
})

test('expect to render without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('expect 1 + 2 to equal 3', () => expect(addTwo(1, 2)).toBe(3))
