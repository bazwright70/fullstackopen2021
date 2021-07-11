import React, { useEffect, useState } from 'react';
import Display from './Display.js';
import FilterName from './FilterName.js';
import AddNew from './AddNew.js'
import server from './server/handlers.js'

const App = () => {

  const [filterValue, setFilterValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [person, setPerson] = useState([]);

  const loadData = () => {
    server.getAllContacts()
      .then(contacts => setPerson(contacts))
      .catch(err => console.log(err))
  }

  useEffect(loadData, [])

  // handle form submit event
  const handleSubmit = (event) => {
    event.preventDefault();

    // check if entry already in phonebook
    for (let entry of person) {
      if (entry.name.toLowerCase() === newName.toLowerCase()) {
        setNewName('');
        setNewNumber('');
        return alert(`${newName} already exists in phonebook`)
      } else if (newName.length < 3) {
        setNewName('');
        setNewNumber('');
        return alert('Name too short');
      }
    }

    // create new entry object
    const newPerson = {
      id: person.length + 1,
      name: newName,
      number: newNumber
    }

    // save new contact to server
    server.createContact(newPerson)
      .then(newContact =>{
        setPerson(person.concat(newContact))})
      .catch(err => console.log(err))

    setNewName('');
    setNewNumber('');
  }

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
      })
      .catch(err => console.log(err));
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

      <h2>Numbers</h2>

      <Display person={person} 
              filterValue={filterValue}
              removeContact={remove} />

    </div>
  );
}

export default App;
