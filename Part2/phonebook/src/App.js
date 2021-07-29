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
      setFilterPersons(persons.concat(personObj));
      setPersons(persons.concat(personObj)); 
    }
    setFilter('');
    setNewName('');
    setNewNumber('');  
  }

  const filterPhonebook = (filterOn) => {
    return persons.filter(person =>{
      return person.name.toLowerCase().includes(filterOn.toLowerCase());
    });
  }

  // FILTER display change handler
  const filterInput = (event) => {
    const filterVal = event.target.value;
    setFilter(filterVal);
    
    const filteredEntries = filterPhonebook(filterVal)
    setFilterPersons(filteredEntries);
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
      <Display filteredPersons={filterPersons} />
    </div>
  )
}

export default App;