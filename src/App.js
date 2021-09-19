import './App.css'
import Header from './app_components/header_component/Header'
import Card from './app_components/card_component/Card'
import Footer from './app_components/footer_component/Footer'

function App({ data }) {
  // toDo maps durchführen

  let allData = data

  console.log(allData)

  return (
    <div className="App">
      <Header />

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

      <Footer />
    </div>
  )
}

export default App
