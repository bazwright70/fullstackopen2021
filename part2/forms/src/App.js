import React, { useState } from 'react';
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const addNote = createNote();
    setNotes(notes.concat(addNote));
    setNewNote('');
  }

  const createNote = () => {
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    return noteObject;
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} note={note.content} />
        })}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          placeholder="add new note..."
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
