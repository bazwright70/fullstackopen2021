import React from 'react';

const FilterName = ({ value, handler }) => {
  return (
    <div>
      Show names with <input
        value={value}
        onChange={handler}
      />
    </div>
  )
}

export default FilterName;