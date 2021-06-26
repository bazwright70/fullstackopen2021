import React from 'react';

const Display = (props) => {
  return (
    <div>{props.label} {props.value} {props.suffix} </div>
  )
}

export default Display;