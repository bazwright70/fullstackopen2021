import React,{useState} from 'react';

const App = () => {

  const [newName,setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    {name:'Arto Hellas',number: '04565235658'}
  ])

  const handleForm = (event) => {
    event.preventDefault();
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

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
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
      {persons.map(person => {
        return <li key={person.name}>{person.name} {person.number}</li>
      })}
      </ul>
    </div>
  )
}

export default App;