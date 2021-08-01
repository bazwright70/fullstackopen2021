import axios from 'axios';
const url = 'http://localhost:3001/persons'

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

export default {
  getPersons,
  addPerson
}


