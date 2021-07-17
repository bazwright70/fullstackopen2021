require('dotenv').config();
const { response, request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
let notes = require('./notes.js');
const { generateId } = require('./helpers.js');
const { Note, connection } = require('./model.js');

// middleware
app.use(express.json())
app.use(cors())

// GET root route
app.get('/',(request, response) => {
  response.send('<h1>Hello World</h1>')
});

// GET all notes
app.get('/api/notes', (request, response)=>{
  Note.find({})
  .then( notes => response.json(notes));
});
// CREATE new note
app.post('/api/notes',(request, response)=>{
  const body = request.body;
  if(!body.content){
    return response.status(400).json({
      error: 'content missing'
    })
  }    
  const note = new Note({
    content: body.content,
    id: generateId(),
    important: body.important || false,
    date: new Date(),   
  });

  note.save()
    .then(note => {
      console.log('Created Note', note);
      response.json(note)
    })
    .catch(err => console.log('Save error', err))

  notes = notes.concat(note);
  response.json(note);
}) // ** End of POST route

// GET single note
app.get('/api/notes/:id',(request, response)=>{
  Note.findById(request.params.id)
    .then(foundNote => {
      console.log("Found by ID: ", foundNote);
      response.json(foundNote)
    })
    .catch( err => console.log('Error finding by id', err))
});

// DELETE single note
app.delete('/api/notes/:id',(request, response)=>{
  const id = Number(request.params.id);
    notes = notes.filter( note =>{
    return note.id !== id;
  });
  response.status(204).end();
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
