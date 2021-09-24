import styled from 'styled-components'

function Card({
  imageUrl,
  // data,
  // characterNames,
  // species,
  // status,
  // episode,
  // key,
}) {
  console.log(imageUrl)

  return (
    <div>
      {/* <img className="image__character" src={imageUrl} alt="" /> */}
      <button className="character__button">
        <StyledImage src={imageUrl} alt="" />
      </button>
    </div>
  )
}

const StyledImage = styled.img`
  width: 50px;
`

export default Card
