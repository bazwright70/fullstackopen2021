import React from 'react';

const Statistic = (props) => {
  return (
    <div>{props.label} {props.value} {props.suffix} </div>
  )
}

export default Statistic;