import './Footer.css'
import CreateCharacterForm from '../Form'

function Footer() {
  return (
    <footer>
      <button>species</button>
      <button>episodes</button>
      <button>status</button>
      {CreateCharacterForm()}
    </footer>
  )
}

export default Footer
