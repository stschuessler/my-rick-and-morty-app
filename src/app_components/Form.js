function CreateCharacterForm() {
  return (
    <form>
      <label>
        Name of character:
        <input type="text" name="characterName"></input>
      </label>
      <label>
        House:
        <input type="text" name="house"></input>
      </label>
      <button></button>
    </form>
  )
}

export default CreateCharacterForm
