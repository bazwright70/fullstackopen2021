import React, { useState } from 'react';

const App = () => {

  const [newName, setNewName] = useState('');
  const [person, setPerson] = useState(
    [{ name: 'Arto Hellas' }]);

  // handle form submit event
  const handleSubmit = (event) => {
    event.preventDefault();

    // check if entry already in phonebook
    for (let entry of person) {
      if (entry.name.toLowerCase().indexOf(newName.toLowerCase()) === 0) {
        setNewName('');
        return alert(`${newName} already exists in phonebook`)
      }
    }

    // create new entry object

    // add entry to phonebook
    setPerson(person.concat({ name: newName }));
    setNewName('');

  }

  // handle name input field update or change
  const updateName = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={newName}
            onChange={updateName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {
        person.map((obj) => {
          return <p key={obj.name} >{obj.name}</p>
        })
      }
    </div>
  );
}

export default App;
