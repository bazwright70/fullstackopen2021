import React  from "react";
import DeleteButton from './DeleteButton.js';

const Display = ({persons, personFilter, deleteHandler}) => { 

  const filterdPersons = persons.filter(person =>{
    return person.name.toLowerCase().includes(personFilter.toLowerCase());
  });

  return(
    <ul>
      {filterdPersons.map(person => {
        return <li key={person.id}>{person.name} {person.number} 
        <DeleteButton handler={() => deleteHandler(person)}/>
        </li>
      })}
      </ul>
  )
}

export default Display;

