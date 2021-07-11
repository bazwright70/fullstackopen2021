import axios from 'axios';
const serverUrl = 'http://localhost:3001/persons';

// return all contacts as data
const getAllContacts = () => {
  const response = axios.get(serverUrl);
  return response.then( response => response.data )
}

// create a new contact and return contact
const createContact = (newContact) => {
  const response = axios.post(serverUrl, newContact);
  return response.then( response => response.data);
}

const removeContact = (contact) => {
  const response = axios.delete(`${serverUrl}/${contact.id}`)
  return response.then( response => response.data)
}

const updateNumber = (contact) => {
  const response = axios.put(`${serverUrl}/${contact.id}`,contact)
  return response.then(response => {
            console.log("Returned contact:", response.data);
            return response.data
        }
          )
} 

const ServerFunctions = {
  getAllContacts,
  createContact,
  removeContact,
  updateNumber
}

export default ServerFunctions;