import React, {useState} from 'react';
import Note from './components/Note.js'


const App = (props) =>  {

const [notes, setNotes] = useState(props.notes);
const [newNote, setNewNote] = useState('');
const [showAll, setShowAll] = useState(true)

const addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    id: notes.length + 1,
    date: new Date().toISOString(),
    content: newNote,
    important: Math.random() > 0.499999
  }
  setNotes(notes.concat(noteObject));
  setNewNote('');
}

const handleNoteChange = (event)=>{
  setNewNote(event.target.value)
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
          <Note key={note.id} note={note} />
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
