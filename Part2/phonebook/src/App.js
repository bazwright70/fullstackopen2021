import React,{useState} from 'react';

const App = () => {

  const [newName,setNewName] = useState('')
  const [persons, setPersons] = useState([
    {name:'Arto Hellas'}
  ])

  const handleForm = (event) => {
    event.preventDefault();
    
    if(persons.some(person => person.name.toLowerCase() === newName.toLowerCase()))
      {
      alert('${newName} is already in the phonebook');
      }else{
        const personObj = {
          name: newName
        }
      setPersons(persons.concat(personObj));     
    }
    setNewName('');
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        Name:
        <input 
          type="text"
          placeholder="Add new name..."
          value={newName}
          onChange={(e)=>{setNewName(e.target.value)}}
        />
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App;