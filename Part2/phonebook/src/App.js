import React,{useEffect, useState} from 'react';
import Display from './components/Display';
import Filter from './components/Filter';
import Form from './components/Form';
import axios from 'axios';
import handler from './services/handlers.js'

const App = () => {
  // App state
  const [filter, setFilter] = useState('');
  const [newName,setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
 
  useEffect(() => {
    handler.getPersons()
      .then(response => setPersons(response.data))
      .catch(err => console.log("**LOG: Error: ", err))
  },[])

  // FUNCTIONS
  // FORM submit handler 
  const handleForm = (event) => {
    event.preventDefault();
    // check if name already in phonebook
    const isDupe = persons.some(person => {
      return person.name.toLowerCase() === newName.toLowerCase()
    })
    if(isDupe){
        alert(`${newName} is already in the phonebook`);
      }else{
        const personObj = {
          name: newName,
          number: newNumber
        }
      handler.addPerson(personObj)
        .then(response => {
          setPersons(persons.concat(personObj)); 
        })
        .catch(error => console.log(error))
        ;
    }
    setFilter('');
    setNewName('');
    setNewNumber('');  
  }

  // Handler for filter input to update filter value
  const filterInput = (event) => {
    const filterVal = event.target.value;
    setFilter(filterVal);
  }

  // Delete button handler
  const handleDelete = (person) => {
    console.log(`Deleting ${person.name}`)
    handler.deletePerson(person.id)
      .then(response => setPersons(
        persons.filter( el => el.name !== person.name)
      ))
      .catch(error => console.log(error))
  }
  
  // APP Component
  return (
    <div>
      <div>debug: {newName}</div> 
      <h2>Phonebook</h2>
      <Filter handler={filterInput} filter={filter}/>
      <h2>Add New Entry</h2>
      <Form handler={handleForm}
            name={newName}
            number={newNumber}
            setName={setNewName}
            setNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Display deleteHandler={handleDelete} persons={persons} personFilter={filter} />
    </div>
  )
}

export default App;