import React from 'react';
import Statistic from './Statistic';

const Statistics = (props) => {

  const [good, bad, neutral] = props.stats;

  const total = good + bad + neutral;
  const avg = good - bad;

  if (total) {
    return (
      <div>
        <Statistic value={good} label="good" />
        <Statistic value={neutral} label="neutral" />
        <Statistic value={bad} label="bad" />
        <Statistic value={total} label="all" />
        <Statistic value={avg / total || 0} label="average" />
        <Statistic value={(good / total * 100) || 0} suffix="%" label="positive" />
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

export default Statistics;