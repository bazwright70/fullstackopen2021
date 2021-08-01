import axios from 'axios';
const url = 'http://localhost:3001/persons/'

const getPersons = (props) => {
  return axios
  .get(url)
  .then(response => response)
}

const addPerson = (person) => {
  return axios  
    .post(url, person)
    .then(response => response)
}

const deletePerson = (id) => {
  return axios.delete(`${url}${id}`)
    .then(response => response)
}

const updatePerson = (person) => {
  return axios.put(`${url}${person.id}`, person)
    .then(response => response)
}
const handlers = {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson
}
export default handlers;


