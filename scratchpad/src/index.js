import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}

const Display = (props) => {

  return (
    <div>
      {props.value}
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="Thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="Increment" />
    </div>
  )

}

ReactDOM.render(
  <App />
  , document.getElementById('root')
)





