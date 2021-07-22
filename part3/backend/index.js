require('dotenv').config();
const { response, request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
let notes = require('./notes.js');
const { generateId, errorHandler } = require('./helpers.js');
const { Note, connection } = require('./model.js');

// middleware
app.use(express.json())
app.use(cors())

// GET root route
app.get('/',(request, response) => {
  response.send('<h1>Hello World</h1>')
});

// GET all notes
app.get('/api/notes', (request, response, next)=>{
  Note.find({})
  .then( notes => response.json(notes))
  .catch( (err) => {
    const error = new Error('Mongo error creating new note');
    error.status(402)
    next(error)
  })
});
// CREATE new note
app.post('/api/notes',(request, response)=>{
  // check for note content
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
    .then(savedNote => {
      console.log('*** LOG: Created Note', note, '***');
      return savedNote.toJSON()
    })
    .then(formattedNote => {
      return response.json(formattedNote)
    })
    .catch(error => {
      console.log('*** LOG: Save error', error);
      return next(error);
    })

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
    .catch( error => {
      console.log('Error finding by id', err);
      return next(error)})
});

// DELETE single note
app.delete('/api/notes/:id',(request, response)=>{
  const id = Number(request.params.id);
    notes = notes.filter( note =>{
    return note.id !== id;
  });
  response.status(204).end();
})

const unknownEndpoint = (request, response) => {
  response.status(404).json({
    error: 'unknown endpoint'
  })
}

app.use(errorHandler);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
