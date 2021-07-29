import React  from "react";

const Display = ({persons, personFilter}) => { 

  const filterdPersons = persons.filter(person =>{
    return person.name.toLowerCase().includes(personFilter.toLowerCase());
  });

  return(
    <ul>
      {filterdPersons.map(person => {
        return <li key={person.name}>{person.name} {person.number}</li>
      })}
      </ul>
  )
}

export default Display;

