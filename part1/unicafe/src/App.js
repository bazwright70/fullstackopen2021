import React, { useState } from 'react';
import Button from './Button';
import Display from './Display'

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const incGood = () => {
    setGood(good + 1);
  }

  const incNeut = () => {
    setneutral(neutral + 1)
  }

  const incBad = () => {
    setbad(bad + 1)
  }

  const total = good + bad + neutral;
  const avg = good - bad

  return (
    <div>
      <p>give feedback</p>
      <br />
      <Button handler={incGood} text="Good" />
      <Button handler={incNeut} text="Neutral" />
      <Button handler={incBad} text="Bad" />
      <br />
      <p>Statistics</p>
      <br />
      <Display value={good} label="good" />
      <Display value={neutral} label="neutral" />
      <Display value={bad} label="bad" />
      <Display value={total} label="all" />
      <Display value={avg / total || 0} label="average" />
      <Display value={(good / total * 100) || 0} suffix="%" label="positive" />
    </div>
  );
}

export default App;
