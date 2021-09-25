import styled from 'styled-components'

function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name of character:
        <input
          type="text"
          name="characterName"
          required
          autocomplete="Off"
        ></input>
      </label>
      <label>
        Planet:
        <input type="text" name="planet" required></input>
      </label>
      <Button>Click me</Button>
    </form>
  )

  function handleSubmit(eventInside) {
    eventInside.preventDefault()
    const form = eventInside.target
    const { characterName, planet } = form.elements
    console.log('form:', form)
    console.log('form.elements', form.elements)
    console.log('name of character: ' + characterName.value)
    console.log('planet: ' + planet.value)

    onCreateCharacter({
      name: characterName.value,
      planet: planet.value,
    })

    characterName.focus()
    form.reset()
  }
}

const Button = styled.button`
  color: red;
  background: transparent;
  border: 2px solid palevioletred;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default CreateCharacterForm
