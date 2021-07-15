import axios from 'axios';
const serverUrl = '/api/contacts';

// return all contacts as data
const getAllContacts = () => {
  const response = axios.get(serverUrl);
  return response.then( response => response.data )
}

// create a new contact and return contact
const createContact = (newContact) => {
  console.log("In create contact Handler:", newContact)
  const response = axios.post(serverUrl, newContact);
  console.log("CreateContact response object: ",response)
  return response.then( response => response.data);
}

const removeContact = (contact) => {
  console.log("In delete handler: ", contact)
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