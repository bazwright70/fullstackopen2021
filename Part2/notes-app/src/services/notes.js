import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/notes/';

const services = {
  getAll: function(){
    // ** original code **
    // return axios.get(baseUrl)
    //   .then(response => response.data)     
  
    // // ** TEST code **
    const request = axios.get(baseUrl)
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
  },
  create: function(note){
    return  axios.post(baseUrl,note)
   },
   update: function(id,noteObject){
    return axios.put(`${baseUrl}${id}`, noteObject)
      .then(response => response.data)
  }
}

export default services;