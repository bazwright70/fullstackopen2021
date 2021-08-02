import React,{useEffect, useState} from 'react';
import Display from './components/Display';
import Filter from './components/Filter';
import Form from './components/Form';
import handler from './services/handlers.js';
import ErrorDisplay from './components/ErrorDisplay';
import './app.css'

const App = () => {
  // App state
  const [filter, setFilter] = useState('');
  const [newName,setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState('info')
 
  useEffect(() => {
    handler.getPersons()
      .then(response => {
        setPersons(response.data)
      })
      .catch(err => {
        displayMessage('Could not display comtacts..','error')
        console.log("**LOG: Error: ", err)
      })
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
        //  check if user wants to be uodated
        const checkAdd = window.confirm(`${newName} is already in the phonebook, replace older number with the new one?`);
        if(!checkAdd){
          return -1;
        }else{
          // find current contact and create person object
          const person = persons.find(el =>{
            return el.name.toLowerCase() === newName.toLowerCase()
          })
          // update number of person object with new number
          person.number = newNumber
          handler.updatePerson(person)
            .then(response => {
              // update contacts state
              setPersons(persons.map(el =>{
                return el.id !== person.id ? el : response.data 
              }))
              displayMessage(`Updated number for ${person.name}`,'info')
            })
            .catch(error =>{
              displayMessage('Could not update contact...','error')
            })
            setNewName('');
            setNewNumber('')
            return person;
        }
      }
        const personObj = {
          name: newName,
          number: newNumber
        }
      handler.addPerson(personObj)
        .then(response => {
          setPersons(persons.concat(personObj)); 
          displayMessage(`Added ${personObj.name} to contacts list...`,'info')
        })
        .catch(error => {
          console.log(error);
          displayMessage('Could not add new contatc...','error')
        });
    setFilter('');
    setNewName('');
    setNewNumber('');  
  }
// Handler to display error message
const displayMessage = (msg,type) => {
  setMessage(msg);
  setMessageType(type);
  setTimeout(()=>{
    setMessage('');
  },4000);
  
}

  // Handler for filter input to update filter value
  const filterInput = (event) => {
    const filterVal = event.target.value;
    setFilter(filterVal);
  }

  // Delete button handler
  const handleDelete = (person) => {
    console.log('Person to delete: ', person)
    const checkDelete = window.confirm(`Delete ${person.name}?`);
    if(!checkDelete){
      return -1;
    }
    handler.deletePerson(person.id)
      .then(response => {
        setPersons(persons.filter( el => el.name !== person.name))
        //displayMessage(`Deleted ${person.name}`,'info');
      }
      )
      .catch(error => {
        displayMessage('Contact could not be deleted from the server...','error')
        console.log(error)})
  }
  
  // APP Component
  return (
    <div>
      <div>debug: {newName}</div> 
      <h2>Phonebook</h2>
      <ErrorDisplay message={message} type={messageType}/>
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