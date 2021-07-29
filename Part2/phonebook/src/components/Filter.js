import React  from "react";

const Filter  = ({handler, filter}) => {
  
  return(
    <div>
        Filter display with <input 
          type="text"
          value={filter}
          placeholder="filter phonebook..."
          onChange={handler}
        />
      </div>
  )
}

export default Filter;