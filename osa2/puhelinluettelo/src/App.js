import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filterer, setFilterer] = useState('')
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

  const handleFiltererChange = (e) => {
    setFilterer(e.target.value)
    // tähän lisäksi toiminnallisuus sille mitä näytetään...?
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filterer} onChange={handleFiltererChange} />
      <h2>add a new</h2>
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
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterer.toLowerCase()))
        .map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
      )}
    </div>
  )

}

export default App