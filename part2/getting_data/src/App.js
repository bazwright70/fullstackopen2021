
import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import Note from './components/Note.js'

const App = () => {

  const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState('');
  // const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log('Effect');
    axios
      .get('http://localhost:3001/notes')
      .then( response => {
        console.log('Promise Fulfilled');
        setNotes(response.data)
      })
  }

  useEffect(hook, []);

  console.log('render', notes.length, 'notes')

  // return notes.map( (note) =>(
  //               <Note key={note.id }note={note}/>
  //           )) 
  return (
    <div>App component</div>
  )     
}

export default App;
