import React, { useState } from 'react';
import Display from './Display.js';
import FilterName from './FilterName.js';

const App = () => {

  const [filterValue, setFilterValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [person, setPerson] = useState(
    [{
      name: 'Arto Hellas',
      number: '08450-563251'
    },
    {
      name: 'Baz Wright',
      number: '0795699637'
    },
    {
      name: 'Jim Smith',
      number: '01254856258'
    },
    {
      name: 'Abby Normal',
      number: '02335695569'
    }
    ]);

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
      name: newName,
      number: newNumber
    }
    // add entry to phonebook
    setPerson(person.concat(newPerson));
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
  return (
    <div>
      <h2>Phonebook</h2>

      <FilterName
        value={filterValue}
        handler={handleFilter}
      />

      <h2> Add New </h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={newName}
            onChange={updateName}
          />
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={updateNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Display person={person} filterValue={filterValue} />

    </div>
  );
}

export default App;
