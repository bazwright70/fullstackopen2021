import React from 'react';

const Display = (countries, filterVal, ready) => {
  console.log(countries,ready)
if(ready){
    const filtered = countries.filter(country =>{
      return country.name.toLowerCase().includes(filterVal.toLowerCase())
    })
  
  return (<ul>
      {
        filtered.map( country=>{
          return <li key={country.alpha3Code}>
              {country.name}
          </li>
        })
      }      
    </ul>
  )
}else{
  return(<div></div>)
}
  
}

export default Display;