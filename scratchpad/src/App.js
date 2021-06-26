import React, { useState } from 'react';
import Button from './Button.js';
import Display from './Display.js'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join('-')}
    </div>
  )
}

const App = () => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllVals] = useState([]);

  const increaseLeft = () => {
    setLeft(left + 1);
    setAllVals(allClicks.concat('L'));
  }

  const increaseRight = () => {
    setRight(right + 1);
    setAllVals(allClicks.concat('R'));
  }

  const resetToZero = () => {
    setLeft(0);
    setRight(0);
    setAllVals([]);
  };

  return (
    <div>
      <Display value={left} />
      <Button label="Left" handleClick={increaseLeft} />
      <Button label="right" handleClick={increaseRight} />
      <Display value={right} />
      <br />
      <History allClicks={allClicks} />
      <br />
      <Button label="Reset" handleClick={resetToZero} />
    </div>
  );
}

export default App;
