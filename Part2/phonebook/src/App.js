import React,{useState} from 'react';

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
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      Filter display with <input 
        type="text"
        value={filter}
        placeholder="filter phonebook..."
        onChange={filterInput}
      />
      <h2>Add New Entry</h2>
      <form onSubmit={handleForm}>
        <div>
          Name: <input 
            type="text"
            placeholder="Add new name..."
            value={newName}
            onChange={(e)=>{setNewName(e.target.value)}}
          />
        </div>
        <div>
          Number:<input 
            type="text"
            placeholder="Add new number..."
            value={newNumber}
            onChange={(e)=>{setNewNumber(e.target.value)}}
          />
        </div>
       
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
      {filterPersons.map(person => {
        return <li key={person.name}>{person.name} {person.number}</li>
      })}
      </ul>
    </div>
  )
}

export default App;