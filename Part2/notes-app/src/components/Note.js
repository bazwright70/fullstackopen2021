import React from 'react';

const Note = ({note, toggleImportance}) => {
  const label = note.important ?
        'Make Unimportant' :
        'Make Important';
  return (
    <li>{note.content} <button onClick={()=> toggleImportance(note.id)}>   
      {label}
      </button>
    </li>
  )
}

export default Note