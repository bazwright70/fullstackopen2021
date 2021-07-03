import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => { 

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => setCountries(res.data))
  }, [])

  const filteredData = countries.filter( country => (
    country.name.toLowerCase().includes(filter.toLowerCase())
  ));

  // function to display single country
  const displayCountry = (country) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital City: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {
          country.languages.map(lang => (
            <li key={lang.name}>{lang.name}</li>
          ))
          }
        </ul> 
        <img src={country.flag} alt="countrys flag" width="100" /> 
      </div>      
    )
  }

  // conditional display for countries filter
  const Result = () => {
    // check if number of countries > 10 ? return error string
    if(filteredData.length > 10){
      return <p>Too many countries, choose a better filter</p>
    }
    // check if only 1 country returned, display data for that country
    if(filteredData.length === 1){
      return displayCountry(filteredData[0])
    }
    // return list of all countries that match filter
    return(
      filteredData.map( country => (
        <div key={country.alpha3Code}>{country.name}
         <button onClick={() => setFilter(country.name)}>Show</button>
        </div>
      ))
    )
  }

  // returned App component
  return(
    <div>
      <label>Find Countries:</label>
      <input type='text' value={filter} onChange={(e)=> setFilter(e.target.value)}/>
      <Result />
    </div>
  )
}

export default App;
