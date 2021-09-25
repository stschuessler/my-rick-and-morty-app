import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import Card from './Card'

describe('Card', () => {
  const imageUrl = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'

  it('has a button', () => {
    render(
      <Router>
        <Card imageUrl={imageUrl} />
      </Router>,
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
