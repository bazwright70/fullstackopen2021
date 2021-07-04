import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => { 

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [windDir, setWindDir ] = useState(0);
  const [icon, setIcon] = useState("");
  
  // On first render get country data
  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => setCountries(res.data))
  }, [])

  const getWeather = (country) => {
    const key = '00ad4285847a7c5d5d377194f4958e71';
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&appid=' + key + '')
      .then( response =>{
        const tempC = (response.data.main.temp-273.15).toPrecision(3);
        const windSpeed = response.data.wind.speed;
        const windDeg = response.data.wind.deg;
        const weatherIcon = response.data.weather[0].icon
        setTemp(tempC)
        setWind(windSpeed)
        setWindDir(windDeg)
        setIcon(weatherIcon)
      })
  }

  // get countries based on filter value
  const filteredData = countries.filter( country => (
    country.name.toLowerCase().includes(filter.toLowerCase())
  ));

  // function to display single country
  const displayCountry = (country) => {
    const srcString = `http://openweathermap.org/img/wn/${icon}@2x.png`
    getWeather(country)
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
        <h3>Weather in {country.name}</h3>
        <p>temperature: {temp} Celcius</p>
        <img src={srcString} alt="weather icon"/>
        <p>Wind: {wind} MPH direction {windDir} degrees</p>
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
      <input type='text' autoFocus value={filter} onChange={(e)=> setFilter(e.target.value)}/>
      <Result />
    </div>
  )
}

export default App;
