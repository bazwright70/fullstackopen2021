import React, {useEffect, useState} from 'react';
import Note from './components/Note.js';
import Notification from './components/Notification';
import noteService  from './services/notes';
import Footer from './components/Footer.js';

const App = () => {
  // create state for App component
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
 // const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

// useEffect to load all notes when newNote is updated
 useEffect(() => {
    noteService.getAll()
      .then(allNotes => {
        setNotes(allNotes)
      }
      )
      .catch(err => console.log(err))
    },[newNote]);

  // newNote test input handler
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  // event handler to add note when input field saved
  const addNote = (event) => {
    event.preventDefault();
    const noteObj = {
      id: notes.length +1,
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5
    }
    noteService.create(noteObj)
      .then( returnedNote => {
      setNotes(notes.concat(returnedNote));
      })
      .catch(err => setErrorMessage(err.message))
      setNewNote('');
  }

  // function to set importance of each note 
  const toggleImportanceOf= (id) => {
    const note = notes.find( note => note.id === id);
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote)
      .then(returnedNote => {
        setNotes( notes.map(note => note.id !== id ? note : returnedNote))
      }).catch(err => {
        setErrorMessage(`"${changedNote.content}" was already removed from the server`);
        setTimeout(()=> setErrorMessage(null)
          ,5000)
          setNotes(notes.filter(n => n.id !== id));
      })
  }
  // Testing notification output
  // Returned App component 
  return (
    <div>
       <h1>Add New Note</h1>
      <form onSubmit={ addNote }>
        <label>New Note: </label>
        <input
          value={newNote}
          onChange={ handleNoteChange }
        />
        <button type="submit">Save</button>
      </form>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
        { notes.map( (note) =>(
          <Note key={note.id}
          note={note}
           toggleImportance={()=> toggleImportanceOf(note.id)}/> 
          ))
        }
      </ul>
      <Footer />
    </div>    
  )
}

export default App;
