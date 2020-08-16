import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1,
      name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = () => {
    const personObject = {
      id: persons.length+1,
      name: newName,
      // number:
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

    console.log(persons);

const isNameTaken = persons.some(person => person.name == newName)

 const onSubmitExtended = (event) => {
   event.preventDefault()
   isNameTaken ? alert(`${newName} is already added to the phonebook`) : addPerson()
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmitExtended}>
        <div>
          name: <input
            type='text'
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.id} name={person.name}/>)}
    </div>
  )
}


export default App
