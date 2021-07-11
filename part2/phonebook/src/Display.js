import React from 'react';

const Display = ({ person, filterValue, removeContact }) => {
  return (
    <div>
     {
      person.filter((obj) => {
          return obj.name.toLowerCase().includes(filterValue.toLowerCase());
          })
            .map((obj) => ( 
              <p key={obj.id} >{obj.name} {obj.number}
                <button
                  onClick={()=> removeContact(obj)}
                >Delete </button>
              </p>))
      }
    </div>
     
  )
}

export default Display;