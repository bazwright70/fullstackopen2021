import React, {useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState('');

  const url = ('https://restcountries.eu/rest/v2/all');

  useEffect(()=> {
    axios
      .get(url)
      .then(res => {
          setCountries(res.data.slice(0,50))
      })
      .catch(err => console.log("**LOG -ERROR: ", err))
  },[])

  return (
    <div >
      <ul>
        {
          countries.map(country=>{
            return <li key={country.alpha3Code}>{country.name}</li>
          })
        }
      </ul>
     
    </div>
  );
}

export default App;
