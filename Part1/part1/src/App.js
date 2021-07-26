import React, { useState } from 'react';

const History = (props) => {
  if(props.allClicks.length===0){
    return(
      <div>Click History will appear here</div>
    )}else{
      return (
        <div>Button History:- {props.allClicks.join('  ')}</div>
      )
    }  
}

const Button = ({ handler, text }) => {
  return(
    <button onClick={handler}>{text}</button>
  )
}

const App = () =>  {
  const [left, setLeft ] = useState(0);
  const [right, setRight ] = useState(0);
  const [ allClicks, setAll] =useState([])

  const handleLeftClick = () => {
    setLeft(left+1);
    setAll([allClicks.concat('L')])
  }
  const handleRightClick = () => {
    setRight(right+1);
    setAll([allClicks.concat('R')])
  }

    return (
    <div>
        {left}
        <Button handler={ handleLeftClick } text='Left' />
        <Button  handler={ handleRightClick } text='Right' />
        {right}
        <History allClicks={allClicks}/>
    </div>
    
  );
}

export default App;
