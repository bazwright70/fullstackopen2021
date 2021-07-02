import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [ allData, setAllData] = useState([]);
  const [ filter, setFilter ] = useState('');

  const getData = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( res => setAllData(res.data))
  }

  useEffect(getData,[])

  const updateInput = (e) =>{
    setFilter(e.target.value)
  }

  const getFiltered = () => {
    return allData.filter(cty =>cty.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const results = () => {
    const data = getFiltered();
    if(data.length > 10){
      return(<p>Too many results</p>)
    }else if(data.length > 1 && data.length < 11){
      return(
        data.map(cty => <li key={cty.alpha3Code}>{cty.name}</li>)
      )
    }else if(data.length === 1){
      return(
        <div>
          <h3>{data[0].name}</h3>
          <p>Capital: {data[0].capital}</p>
          <p>Population: {data[0].population}</p>
          <h4>Languages</h4>
          <ul>
            {data[0].languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
          </ul>
          <br/>
            <img alt="flag" src={data[0].flag} width="100" height="100"/>         
        </div>
        )
    }
  }

  return(
    <div>
      <label>Find Countries</label>
      <input type='text' value={filter} onChange={updateInput} />
      <ul>
        {results()}
      </ul>
    </div>
  )

}

export default App;
