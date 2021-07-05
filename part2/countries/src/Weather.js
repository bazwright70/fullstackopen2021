import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ( {country} ) =>{

  const [weather, setWeather] = useState();

  // convert temp from axios from Kelvin to Celcius for display
  const KtoC = (temp) => (temp - 273.15).toPrecision(3);
 // get weather data
 useEffect(()=>{
  axios 
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}+&appid=${process.env.REACT_APP_weatherAppId}`)
    .then( res => {       
      const data = res.data;
      setWeather(data);
    })
},[country.capital])

    return (
      <div>
        <h3>Weather in {country.capital}</h3>

          {weather && <div>
                        <p><strong>Temperature:</strong> {KtoC(weather.main.temp)} deg C</p>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="flag"/>
                        <p><strong>Wind: </strong>{weather.wind.speed}mph {weather.wind.deg} degrees</p>
                      </div>
           }               
        </div>
      ) 
}

export default Weather;