import React, { useEffect, useState } from 'react';
import Display from './Display.js';
import FilterName from './FilterName.js';
import AddNew from './AddNew.js'
import server from './server/handlers.js'
import Message from './components/Message.js';

const App = () => {

  const [filterValue, setFilterValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [person, setPerson] = useState([]);
  const [displayMessage, setDisplayMessage] = useState()

  const loadData = () => {
    server.getAllContacts()
      .then(contacts => setPerson(contacts))
      .catch(err => {
        setTimeout(() => setDisplayMessage(err.message), 5000)
      })
  }

  useEffect(loadData, [])

  // handle form submit event
  const handleSubmit = (event) => {
    event.preventDefault();

    // loop through person array for validations
    for (let entry of person) {
      // check if name length is valid
      if(newName.length < 3) {
        setNewName('');
        setNewNumber('');
        return alert('Name too short');
      }

      // check if entry already in phonebook
      if (entry.name.toLowerCase() === newName.toLowerCase()) {
          const reply = window.confirm(`${entry.name} is already in the phonebook, 
                      replace old number with the new one`);
        // clear inputs if number update not required
        if(!reply){
          setNewName('');
          setNewNumber('');
          return 0;
        }else{
          entry.number = newNumber
          server.updateNumber(entry)
            .then(contact => {
              console.log("number updated for", contact);
              setNewName('');
              setNewNumber('');
            })
            .catch(err => {
              console.log(err.status)
              setDisplayMessage(`Information on "${entry.name}" has already been removed from the server.`)
              setTimeout(() => {
                setNewName('');
                setNewNumber('');
                setDisplayMessage(null);
              }, 5000);             
            });
            return entry;
        }
    }
  }
    // create new entry object
    console.log("Creating new person in form submit")
    const newPerson = {
      id: person.length + 1,
      name: newName,
      number: newNumber
    }

    // save new contact to server
    server.createContact(newPerson)
      .then(newContact =>{
        console.log("creating new contact in sever.createContact function")
        setPerson(person.concat(newContact));
        setDisplayMessage(`Added ${newContact.name}`)
        setNewName('');
        setNewNumber('');
        setTimeout(()=>{
          setDisplayMessage(null);
        },5000)       
      })
      .catch(err => {
        setDisplayMessage(
          "There was a problem creating a contact "
          )
        setTimeout(() => {
          setNewName('');
          setNewNumber('');
          setDisplayMessage(null);
        }, 5000)
      });
  } //** end of handle submit


  // handle name input field update or change
  const updateName = (event) => {
    setNewName(event.target.value);
  }

  // handle number input field
  const updateNumber = (event) => {
    setNewNumber(event.target.value)
  }

  // handle change in filter input text and update
  const handleFilter = (event) => {
    setFilterValue(event.target.value)
  }

  // remove contact onclick handler for display button
  const remove = (contact) => {
    const reply = window.confirm(`Remove ${contact.name}?`);
    if(!reply){
      return;
    }
    server.removeContact(contact)
      .then(() => {
        const contacts = person.filter( elem =>{
          return elem.id !== contact.id;
          });
          setPerson(contacts);
          setDisplayMessage(
            `Removed ${contact.name}`
            )
          setTimeout(() => {
            setNewName('');
            setNewNumber('');
            setDisplayMessage(null);
          }, 5000)
          
      })
      .catch(err => {
        setDisplayMessage(
          `There was a problem deleting the contact "${contact.name}"`
          )
        setTimeout(() => {
          setNewName('');
          setNewNumber('');
          setDisplayMessage(null);
        }, 5000);          
      })
  }
  
// ***  app component retruned *** //
  return (
    <div>
      <h2>Phonebook</h2>

      <FilterName value={filterValue} handler={handleFilter} /><hr />

      <h2> Add New </h2>

      <AddNew newName={newName} newNumber={newNumber}
        handleSubmit={handleSubmit} handleName={updateName}
        handleNumber={updateNumber} /><hr />
      <Message message={displayMessage}/>
      <h2>Numbers</h2>

      <Display person={person} 
              filterValue={filterValue}
              removeContact={remove} />
    </div>
  );
}

export default App;
