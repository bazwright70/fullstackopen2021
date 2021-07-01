import React, { useState } from 'react';

const App = () => {

  const [person, setPerson] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const addPerson = {
      name: newName,
      id: person.length + 1
    }
    for (let entry of person) {
      console.log(entry.name)
      if (entry.name.toLowerCase().indexOf(addPerson.name.toLowerCase()) === 0) {
        setNewName('')
        return alert(`${entry.name} already exists in phonebook`)
      }
    }
    setPerson(person.concat(addPerson));
    setNewName('');

  }

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
        person.map((obj, idx) => {
          return <p key={obj.id} >{obj.name}</p>
        })
      }
    </div>
  );
}

export default App;
