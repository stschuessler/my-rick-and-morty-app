function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name of character:
        <input type="text" name="characterName"></input>
      </label>
      <label>
        House:
        <input type="text" name="house"></input>
      </label>
      <button>Click me</button>
    </form>
  )

  function handleSubmit(eventInside) {
    eventInside.preventDefault()
    const form = eventInside.target
    const { characterName, house } = form.elements
    console.log('form:', form)
    console.log('form.elements', form.elements)
    console.log('name of character: ' + characterName.value)
    console.log('haus: ' + house.value)
    form.reset()
    characterName.focus()
  }
}

export default CreateCharacterForm
