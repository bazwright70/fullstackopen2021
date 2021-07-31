import React, { useState, useEffect } from 'react';
import Note from './components/Note.js';
import axios from 'axios';
import noteService from './services/notes'

const App = () =>  {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

// load db data in useEffect on intial render
useEffect(()=> {
    noteService.getAll().then(data => {
      setNotes(data)
    })
},[])

// add note button hadler
const addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    id: notes.length + 1,
    date: new Date().toISOString(),
    content: newNote,
    important: Math.random() > 0.499999
  }
  noteService.create(noteObject)
    .then(data => {
      setNewNote('');
      setNotes(notes.concat(data));  
    }) 
}

const handleNoteChange = (event)=>{

  setNewNote(event.target.value)
}
// Note importance button handler
const toggleImportanceOf =(id) => {
  const foundNote = notes.find(el => el.id === id);
  const newNote = {...foundNote, important: !foundNote.important};
 
  noteService.update(id,newNote)
    .then(data =>{
      setNotes(notes.map((note)=>{
        return note.id !== id ? note : data
      }))
    }) 
}

const notesToShow = showAll 
  ? notes
  : notes.filter( note => note.important);

  return (
    <div >
      <h1>Notes</h1>
      <button onClick={()=>{setShowAll(!showAll)}}>
        {showAll ? "Show Important" : "Show All"}
      </button>
      <ul>
        {notesToShow.map( note => 
          <Note key={note.id} 
            note={note} 
            toggleImportance={toggleImportanceOf}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          type="text" 
          value={newNote} 
          onChange={handleNoteChange}
          placeholder="Add new note..."
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
