import './App.css'
import Header from './app_components/header_component/Header'
import Card from './app_components/card_component/Card'
import Footer from './app_components/footer_component/Footer'

function App({ data }) {
  console.table(data)
  console.log(data[0].name)

  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

export default App
