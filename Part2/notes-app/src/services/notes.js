import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes/';

const getAll = () => {
  axios 
    .get(baseurl)
    .then(response => {
      allNotes = response.data;
      return allNotes;
    })  
}

const create = (note) => {
  axios.post(baseUrl)
    .then( response => {
      const createdNote = response.data;
      return createdNote
    }) 
}

const update = (id, noteObject) => {
  axios.put(`${baseUrl}${note.id}`, note)
    .then(response => {
      const updatedNote = response.data;
      return updatedNote;
    })
}

export default getAll;