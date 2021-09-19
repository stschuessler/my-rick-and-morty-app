import './Card.css'

function Card() {
  return (
    <div>
      <button>
        <img
          className="image__character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
        {/* for later array: characters.image */}
      </button>
      <button>
        <img
          className="image__character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
      </button>
      <button>
        <img
          className="image__character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
      </button>
      <button>
        <img
          className="image__character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
      </button>
      <button>
        <img
          className="image__character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt=""
        />
      </button>
    </div>
  )
}

export default Card
