import Header from './app_components/header_component/Header'
import Card from './app_components/card_component/Card'
import Footer from './app_components/footer_component/Footer'
import CreateCharacterForm from './app_components/Form'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom'

const INITIAL_DATA = [
  {
    name: 'Rick',
    planet: 'Earth',
  },
  {
    name: 'Morty',
    planet: 'Earth',
  },
]

function App() {
  const [allData, setData] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer.results)

        setData(dataFromServer.results)
      })
  }, [])

  const [dataInputForm, setDataInputForm] = useState(INITIAL_DATA)

  return (
    <StyledApp>
      <StyledHeader>
        <Header />
      </StyledHeader>

      <StyledCard>
        {allData.map((character) => (
          <Card
            imageUrl={character.image}
            // characterNames={character.name}
            // species={character.species}
            // status={character.status}
            // episode={character.episode}
            // key={character.id}
          />
        ))}
      </StyledCard>

      <StyledFooter>
        <Footer />
      </StyledFooter>
      <StyledFormDiv>
        {/* <Switch> */}
        <Route exact path="/entry">
          <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
        </Route>
        {dataInputForm.map((character) => (
          <Route exact path={['/character/new', '/character']}>
            <StyledAppCardDiv key={character.name}>
              {character.name} from {character.planet}
            </StyledAppCardDiv>
          </Route>
        ))}
        </Switch>
        <Route path="/">
          Want to create a new characters?
          <StyledLink to="/entry">Just click me!</StyledLink>
          Want to see your entries?
          <StyledLink to="/character">Click me!</StyledLink>
        </Route>
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

export const StyledLink = styled(Link)`
  color: orange;
`

export default App
