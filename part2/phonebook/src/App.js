import React, { useState } from 'react'
import Persons from './persons'

const App = (props) => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll ? persons : persons.filter(name => name.important === true)
  const rows = () => personsToShow.map(person => 
  <Persons
    key={person.name}
    note={person.name}
  />
  )


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      content: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(persons))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App
