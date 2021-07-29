import React  from ("react");

const Display = (props) => {

  return(
    <ul>
      {filterPersons.map(person => {
        return <li key={person.name}>{person.name} {person.number}</li>
      })}
      </ul>
  )
}

export default Display;

