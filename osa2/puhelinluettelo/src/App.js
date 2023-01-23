import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleClick = (e) => {
    e.preventDefault()
    if (persons.find((person) => person.name === newName.trim())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName.trim())
        console.log("person", person)

        personService
          .update(person.id, { ...person, number: newNumber.trim()})
          .then(response => {
            setPersons(persons.map(p => p.id !== person.id ? p : response.data))
            setNewName('')
            setNewNumber('')
        })
      }
      return
    }
    const personObject = { name: newName.trim(), number: newNumber.trim() }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const deleteObject = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
        handleClick={handleClick} />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        deleteObject={deleteObject} />
    </div>
  )

}

export default App