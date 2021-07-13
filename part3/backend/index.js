const { response, request } = require('express');
const express = require('express');
const app = express();
let notes = require('./notes.js');
const { generateId } = require('./helpers.js');

// middleware
app.use(express.json())

// GET root route
app.get('/',(request, response) => {
  response.send('<h1>Hello World</h1>')
});

// GET all notes
app.get('/api/notes', (request, response)=>{
  response.send(notes)
});
// CREATE new note
app.post('/api/notes',(request, response)=>{
  const body = request.body;
  if(!body.content){
    return response.status(400).json({
      error: 'content missing'
    })
  }    
  const note = {
    content: body.content,
    id: generateId(),
    important: body.important || false,
    date: new Date(),   
  };

  notes = notes.concat(note)
  console.log(notes);
  response.json(note);
})

// GET single note
app.get('/api/notes/:id',(request, response)=>{
  const id = Number(request.params.id);
  const note = notes.find( n => n.id === id);
  if(note){
    response.json(note)
  }else{
    response.status(404).end();
  }  
});

// DELETE single note
app.delete('/api/notes/:id',(request, response)=>{
  const id = Number(request.params.id);
    notes = notes.filter( note =>{
    return note.id !== id;
  });
  response.status(204).end();
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)