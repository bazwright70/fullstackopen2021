import axios from  'axios';
const baseUrl = '/api/notes';

const getAll = () =>{
  const promise = axios.get(baseUrl);
  return promise.then(response => response.data)
}

const create = (newNote) => {
  const promise = axios.post(baseUrl, newNote);
  return promise.then(response => response.data)
}

const update = (id, newNote) => {
  const promise = axios.put(`${baseUrl}/${id}`, newNote)
  return promise.then(response => response.data)
}

const functions = {
  getAll,
  create,
  update
}

export default functions;