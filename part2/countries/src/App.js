import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Weather from './Weather';

const App = () => { 

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  
 

  // get country data
  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => {
        setCountries(res.data);
      })
  },[])

  // Result component
  const Result = () =>{


    const filteredArr = countries.filter(elem =>{
      return elem.name.toLowerCase().includes(filter.toLowerCase())
    })

    // render diplay based on number of countries reruned
    if(filteredArr.length > 10) {
      return <p>Too many countries, try a better search</p>
    }

    if(filteredArr.length === 1){
      const displayCountry = filteredArr[0];
      return(
        <div>
          <h2>{displayCountry.name}</h2>
          <p>Capital City {displayCountry.capital}</p>
          <p>Population: {displayCountry.population}</p>
          <h3>languages</h3>
          <ul>
            {displayCountry.languages.map(elem =>{
              return <li key={elem.iso639_2}>{elem.name}</li>
            })}
          </ul>
          <img src={displayCountry.flag} alt="flag" width="20%"/>
          <Weather country={displayCountry}/>
        </div>
      )
    }

      return ( <div>
        <h4>Results</h4>
        {
          filteredArr.map( elem => (
            <p key={elem.alpha3Code}>{elem.name}
              <button onClick={()=> setFilter(elem.name)}>Show</button>
            </p>
          ))
        }
      </div> )
  }

  // returned App component
  return(
    <div>
      <label>Find Countries:</label>
      <input type='text' autoFocus value={filter} onChange={(e)=> setFilter(e.target.value)}/>
      <Result />
      
    </div>
  )
}

export default App;
