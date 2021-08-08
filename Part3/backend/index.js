const http = require('http');
const express = require('express');
const { generateId } = require('./helpers');
const app = express();
// import http from 'http';

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

// Middleware
app.use(express.json())

  // APP GET root route
app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
}) // ** end ** APP GET root route

  // APP GET ALL 
app.get('/api/notes', (request, response) => {
  response.json(notes)
}) // **end** APP GET All

  // APP POST ALL
  app.post('/api/notes',(request, response)=>{
    const body = request.body;
    if(!body.content){
      return response.status(400).json({
        error: 'content missing'
      })
    }
   const note ={
     content: body.content,
     important: body.important || false,
     date: new Date().toISOString(),
     id :  generateId(notes)
   }
    notes = notes.concat(note);
    response.json(note);
  })

   // APP GET by ID
app.get('/api/notes/:id', (request, response)=> {
  const id = Number(request.params.id);
  const note = notes.find((note)=> note.id === id)
  if(!note){
    return response.status(404).send(`<h1>No note with ID of ${id} exists</h1>`)
  }else{
    return response.send(note)
  }
}) // ** end ** APP GET by ID

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(req.params.id);
  notes = notes.filter(note => note.id !== id);
  response.status(204).end();
})

const PORT = 3001;
app.listen(PORT, ()=> {
  console.log(`Sever listening on port ${PORT}`)
})