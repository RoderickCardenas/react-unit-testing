import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Numbers from './Numbers'
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

test('expect 1 + 2 to equal 3', () => expect(Numbers.addTwo(1, 2)).toBe(3))
test('expect 10 + 20 to equal 30', () =>
  expect(Numbers.addTwo(10, 20)).toBe(30))
test('expect 15 + 2 to equal 17', () => expect(Numbers.addTwo(15, 2)).toBe(17))
test('expect 100 + 20 to equal 120', () =>
  expect(Numbers.addTwo(100, 20)).toBe(120))
test('expect 4 + 3 to equal 7', () => expect(Numbers.addTwo(4, 3)).toBe(7))

test('expect 2 * 2 to equal 4', () => expect(Numbers.double(2)).toBe(4))
test('expect 2 * 4 to equal 8', () => expect(Numbers.double(4)).toBe(8))
test('expect 2 * 100 to equal 200', () => expect(Numbers.double(100)).toBe(200))
test('expect 2 * 26 to equal 52', () => expect(Numbers.double(26)).toBe(52))
