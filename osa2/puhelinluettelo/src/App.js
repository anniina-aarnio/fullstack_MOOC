import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123 456'},
    { name: 'Testi Nimi', number: '123 4567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (persons.find((person) => person.name === newName.trim())) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(
      { name: newName.trim(), number: newNumber.trim() }))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
                  value={newName}
                  onChange={handleNameChange} />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) =>
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      )}
    </div>
  )

}

export default App