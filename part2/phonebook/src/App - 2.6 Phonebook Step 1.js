import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')
  const rows = () => persons.map(person =>
      <li key={person.name}>{person.name}</li>
  )


  const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      console.log('addedName ', newName)
      const person={name:addedName}
      //const person={name:event.target.value.toString()}
      setPersons(persons.concat(person))
      setNewName('')
  }
  const handleNameChange = (event) => {
      console.log('Target: ',event.target.value)
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
