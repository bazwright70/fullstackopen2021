import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display.js';


const App = () => {
  const [countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ready,setReady] = useState(false);

  const url = ('https://restcountries.eu/rest/v2/all');

  useEffect(()=> {
    axios
      .get(url)
      .then(res => {
          setCountries(res.data);
          setReady(true)
      })
      .catch(err => console.log("**LOG -ERROR: ", err))
  },[])

  return (
    <div >
      Find Countries:
      <input 
        type="text"
        value={filter}
        onChange={(e)=>{setFilter(e.target.value)}} />
        <ul>
      { 
         countries.filter(country =>{
          return country.name.toLowerCase().includes(filter.toLowerCase())
        }).length > 10 ?
         (<p> too many matches, try a better filter</p>) :
         countries.filter(country =>{
          return country.name.toLowerCase().includes(filter.toLowerCase())
        }).map( country=>{
          return <li key={country.alpha3Code}>
              {country.name}
          </li>
        })
      }      
    </ul>
    </div>
  );
}

export default App;
