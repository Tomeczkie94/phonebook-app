import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '0700 880 774' },
    { id: 2, name: 'Policja', number: '997' },
    { id: 3, name: 'Pogotowie', number: '999' },
    { id: 4, name: 'Straż Pożarna', number: '998' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const addPerson = () => {
    const personObject = {
      id: persons.length+1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
    console.log(persons);

const isNameTaken = persons.some(person => person.name == newName)

 const onSubmitExtended = (event) => {
   event.preventDefault()
   isNameTaken ? alert(`${newName} is already added to the phonebook`) : addPerson()
}

const contactsToShow = () => showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()));

const handleFilterChange = (event) => {
  console.log(event.target.value)
  setNewFilter(event.target.value)
  if (newFilter.length > 0) {
    setShowAll(false)
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h3>Add a new</h3>

      <PersonForm
        onSubmit={onSubmitExtended}
        valueName={newName}
        onChangeName={handleNameChange}
        valueNumber={newNumber}
        onChangeNumber={handleNumberChange}
      />

      <h3>Numbers</h3>
      {contactsToShow().map(person => <Person key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )
}


export default App
