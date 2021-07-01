import React from 'react';

const Display = ({ person, filterValue }) => {

  return (
    <div>
      Display goes here...
      {
        person
          .filter((obj) => {
            return filterValue === ''
              || obj.name.toLowerCase().includes(filterValue.toLowerCase());
          })
          .map((obj) => {
            return <p key={obj.name} >{obj.name} {obj.number}</p>
          })
      }
    </div>
  )
}

export default Display;