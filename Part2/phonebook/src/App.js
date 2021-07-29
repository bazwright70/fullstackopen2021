import React,{useEffect, useState} from 'react';
import Display from './components/Display';
import Filter from './components/Filter';
import Form from './components/Form';
import axios from 'axios';

const App = () => {
  // App state
  const [filter, setFilter] = useState('');
  const [newName,setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
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
      setPersons(persons.concat(personObj)); 
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
      <Display persons={persons} personFilter={filter} />
    </div>
  )
}

export default App;