import React, { useState } from 'react'


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])

    const [newName, setNewName] = useState('')
    const rows = () => persons.map(person =>
        <li key={person.name + Math.random().toString()}>{person.name}</li>
    )


    const addName = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const person = { name: newName }
        if (persons.some(personCheck => personCheck.name===person.name)) {
            const warning = newName + ' is alreardy added to phonebook'
            window.alert(warning)
            setNewName('')
        } else {
            setPersons(persons.concat(person))
            setNewName('')
        }
    }
    const handleNameChange = (event) => {
        console.log('Target: ', event.target.value)
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
