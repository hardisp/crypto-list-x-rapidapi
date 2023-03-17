import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import { App } from '../App'

test('Render Title', () => {
  render(<App />)
  const HeaderElement = screen.getByText(/Cripto List APP/i)
  const NavElement = screen.getByText(/Dashboard/i)

  expect(HeaderElement).toBeInTheDocument()
  expect(NavElement).toBeInTheDocument()
})
