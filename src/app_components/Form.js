function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name of character:
        <input type="text" name="characterName"></input>
      </label>
      <label>
        Planet:
        <input type="text" name="planet"></input>
      </label>
      <button>Click me</button>
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

export default CreateCharacterForm
