import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics'

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

  const stats = [good, bad, neutral]

  return (
    <div>
      <p>give feedback</p>
      <br />
      <Button handler={incGood} text="Good" />
      <Button handler={incNeut} text="Neutral" />
      <Button handler={incBad} text="Bad" />
      <br />
      <p>Statistics</p>
      <Statistics stats={stats} />
      <br />

    </div>
  );
}

export default App;
