import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import Card from './Card'

describe('Card', () => {
  const image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'

  it('renders', () => {
    render(
      <Router>
        <Card image={image} />
      </Router>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
