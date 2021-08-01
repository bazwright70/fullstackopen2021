import React from 'react';

const DeleteButton = ({handler}) => {
  return (
    <button onClick={handler}>Delete</button>
  )
}

export default DeleteButton;