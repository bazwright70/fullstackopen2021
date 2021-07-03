import React from 'react';

const Note = ( {note}) =>{
  return (
    <div key={note.id}>
      <p>Id: {note.id}</p>
      <p>Content: {note.content}</p>
      <p>Date: {note.date}</p>
      <p>Important: {note.important.toString()}</p>
    </div>
  )
}

export default Note;