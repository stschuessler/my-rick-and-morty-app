import './App.css'
import Header from './app_components/header_component/Header'
import Card from './app_components/card_component/Card'
import Footer from './app_components/footer_component/Footer'
import CreateCharacterForm from './app_components/Form'
import { useState } from 'react'

function App({ data }) {
  let allData = data

  console.log(allData)

  const [dataInputForm, setDataInputForm] = useState([])

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>

      <div className="Card">
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
      </div>

      <div className="Footer">
        <Footer />
      </div>

      <div>
        <CreateCharacterForm />
      </div>
    </div>
  )
}

export default App
