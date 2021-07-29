import React,{useState} from 'react';
import Display from './components/Display';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
  // App state
  const [filter, setFilter] = useState('');
  const [newName,setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filterPersons, setFilterPersons] = useState(persons)

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
    setNewName('');
    setNewNumber('');
  }

  // FILTER display change handler
  const filterInput = (event) => {
    const filterVal = event.target.value;
    setFilter(filterVal);
    
    let filteredEntries = persons.filter(person =>{
      console.log("Filter", filterVal)
      console.log("Name: ", person.name)
      return person.name.toLowerCase().includes(filterVal.toLowerCase());
    })
    console.log(filteredEntries)
    setFilterPersons(filteredEntries)
  }
  

  // APP Component
  return (
    <div>
      <div>debug: {newName}</div> // debug only
      <h2>Phonebook</h2>
      <Filter />
      <h2>Add New Entry</h2>
      <Form />
      <h2>Numbers</h2>
      <Display />
    </div>
  )
}

export default App;