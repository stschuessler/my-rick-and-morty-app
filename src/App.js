import Header from './app_components/header_component/Header'
import Card from './app_components/card_component/Card'
import Footer from './app_components/footer_component/Footer'
import CreateCharacterForm from './app_components/Form'
import { useState } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

  const INITIAL_DATA = [
    {
      name: 'Rick',
      planet: 'Earth',
    },
  ]

  const [dataInputForm, setDataInputForm] = useState([INITIAL_DATA])

  return (
    <StyledApp>
      <StyledHeader>
        <Header />
      </StyledHeader>

      <StyledCard>
        {allData.map((character) => (
          <Card
            characterNames={character.name}
            species={character.species}
            status={character.status}
            imageUrl={character.image}
            episode={character.episode}
            key={character.id}
          />
        ))}
      </StyledCard>

      <StyledFooter>
        <Footer />
      </StyledFooter>

      <StyledFormDiv>
        <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
        {dataInputForm.map((character) => (
          <StyledAppCardDiv key={character.name}>
            {character.name} from {character.planet}
          </StyledAppCardDiv>
        ))}
      </StyledFormDiv>
    </StyledApp>
  )

  function handleCreateCharacter({ name, planet }) {
    const newInputData = [
      ...dataInputForm,
      {
        name: name,
        planet: planet,
      },
    ]
    setDataInputForm(newInputData)
  }
}

const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
  height: auto;
`

const StyledFooter = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledFormDiv = styled.div``

const StyledAppCardDiv = styled.div`
  border: 2px solid pink;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 20px;
`

export default App
