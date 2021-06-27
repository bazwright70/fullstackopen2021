import React from 'react';
import Statistic from './Statistic';

const Statistics = (props) => {

  const [good, bad, neutral] = props.stats;

  const total = (good + bad + neutral);
  const avg = ((good - bad) / total).toFixed(1);
  const percent = (good / total * 100).toFixed(1);

  if (total) {
    return (
      <table>
        <tbody >
          <tr>
            <td>Good </td><Statistic value={good} />
          </tr>
          <tr>
            <td>Neutral </td><Statistic value={neutral} />
          </tr>
          <tr>
            <td>Bad </td><Statistic value={bad} />
          </tr>
          <tr>
            <td>Total </td><Statistic value={total} />
          </tr>
          <tr>
            <td>Average </td><Statistic value={avg || 0} />
          </tr>
          <tr>
            <td>Positive</td><Statistic value={percent || 0} suffix="%" />
          </tr>
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

export default Statistics;