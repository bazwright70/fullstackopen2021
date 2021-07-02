import axios from 'axios';
import React, { useState, useEffect } from 'react';


const App = ({ dataset }) => {

const [filter, setFilter] = useState('');
const [data, setData] = useState([]);

const setInput = (event) =>{
  const output = event.target.value;
  setFilter(output);
}

console.log(dataset)

const getData = () =>{
  axios.get('https://restcountries.eu/rest/v2/lang/es')
    .then( res => setData(res.data));
}

useEffect(getData,[]);

const search = (searchFilter) =>{
  const filteredData = data.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()));
  return filteredData.length > 10 ?
            "Too many countries, specify a better filter." :
            filteredData.map(country => {
              return <p>{country.name}</p>
            })
}

  return (
    <div>
      <p>Filter</p>
      <input 
        type='text'
        placeholder="filter countries"
        onChange={setInput}
        value={filter}/>
      <div>
       { search(filter) }     
      </div>
    </div>
  );
}

export default App;
