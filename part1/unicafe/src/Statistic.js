import React from 'react';

const Statistic = (props) => {
  return (
    <td>
      {props.value} {props.suffix}
    </td>
  )
}

export default Statistic;