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
      {/* <img className="image__character" src={imageUrl} alt="" /> */}
      <button className="character__button">
        <img className="image__character" src={imageUrl} alt="" />
      </button>
    </div>
  )
}

export default Card
