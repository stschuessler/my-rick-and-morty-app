import './Card.css'

function Card({
  data,
  characterNames,
  species,
  status,
  imageUrl,
  episode,
  key,
}) {
  console.log(imageUrl)

  return (
    <div>
      <button>
        <img className="image__character" src={imageUrl} alt="" />
        {/* for later array: characters.image 
        console.log(data[0].name)  */}
      </button>
    </div>
  )
}

export default Card
