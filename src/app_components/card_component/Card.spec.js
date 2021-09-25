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

  it('has a alt text', () => {
    render(
      <Router>
        <Card imageUrl={imageUrl} />
      </Router>,
    )

    const url = screen.getByAltText('')

    expect(url).toBeInTheDocument()
  })

  it('has an image', () => {
    render(
      <Router>
        <Card imageUrl={imageUrl} />
      </Router>,
    )

    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
  })
})
