import React, { useState } from 'react';
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('');

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

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
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
