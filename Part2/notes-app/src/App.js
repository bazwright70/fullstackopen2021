import React, { useState, useEffect } from 'react';
import Note from './components/Note.js';
import noteService from './services/notes';
import Notification from './components/Notification'; 
import './index.css'

const App = () =>  {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

// load db data in useEffect on intial render
useEffect(()=> {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
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

// Note importance button handler
const toggleImportanceOf =(id) => {
  const foundNote = notes.find(el => el.id === id);
  const newNote = {...foundNote, important: !foundNote.important};
 
  noteService
    .update(id,newNote)
    .then(data =>{
      setNotes(notes.map((note)=>{
        return note.id !== id ? note : data
      }))
    }) 
    .catch(error => {
      setErrorMessage(
        `The note "${foundNote.content}" has already been deleted from the server`
      )
      setTimeout(()=>{
        setErrorMessage(null)
      },5000)
      setNotes(notes.filter(note => note.id !== id))
    })   
}
// Note input field change handler
const handleNoteChange = (event)=>{
  setNewNote(event.taget.value)
}

const notesToShow = showAll 
  ? notes
  : notes.filter( note => note.important);

const footerStyle={
  color: 'green',
    fontStyle: 'italic',
    fontSize: 16
}

  return (
    <div >
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
      <div style={footerStyle}>
        <br/>
        <em>Note App, Department of Computer Science, University of Helsinki 2021</em>
      </div>
    </div>
  );
}

export default App;
