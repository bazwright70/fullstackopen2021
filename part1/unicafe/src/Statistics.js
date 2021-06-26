import React from 'react';
import Display from './Display';

const Statistics = (props) => {

  const [good, bad, neutral] = props.stats;

  const total = good + bad + neutral;
  const avg = good - bad;

  return (
    <div>
      <Display value={good} label="good" />
      <Display value={neutral} label="neutral" />
      <Display value={bad} label="bad" />
      <Display value={total} label="all" />
      <Display value={avg / total || 0} label="average" />
      <Display value={(good / total * 100) || 0} suffix="%" label="positive" />
    </div>
  )
}

export default Statistics;