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
          setCountries(res.data);
      })
      .catch(err => console.log("**LOG -ERROR: ", err))
  },[])

const filterResults = (countries, filterVal) => {
  const results =  countries.filter(country =>{
    return country.name.toLowerCase().includes(filter.toLowerCase())
  });
  return results.length > 11 ?
    [{name: 'Too many results, try a better search',
    alpha3Code: 'tooLong'  
    }] :
    results.length > 1 ? results :
    createCountry(results)
}

const createCountry = (result) => {
  if(result.length){
   const {
     name, capital,population, languages,flag
   } = result[0]
    return [
      {
        name, capital,population, languages,flag
      }
    ]
  }
  
}
  return (
    <div >
      Find Countries:
      <input 
        type="text"
        value={filter}
        onChange={(e)=>{setFilter(e.target.value)}} />
        <ul>
      { 
         filterResults(countries, filter).length > 10 ?
         (<p> too many matches, try a better filter</p>) :
         filterResults(countries, filter).map( country=>{
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
