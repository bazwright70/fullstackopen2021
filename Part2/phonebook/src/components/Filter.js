import React  from ("react");

const Filter  = (props) => {
  
  return(
    <div>
        Filter display with <input 
          type="text"
          value={filter}
          placeholder="filter phonebook..."
          onChange={filterInput}
        />
      </div>
  )
}

export default Filter;