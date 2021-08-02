import React from 'react';

const MessageDisplay = ({message, type}) => {
  if(message){
    return (
      <div className={type==='error'?'error':'info'}>{message}</div>
    )
  }else{
    return null
  }
}

export default MessageDisplay;