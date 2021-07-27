import React,{ useState } from "react";

//  button component
const Button = ({label, handler}) => {
  return(
    <button onClick={handler}>{label}</button>
  )
}
// indiv stat component
const Stat = ({label, val}) => {
  return (
    <p>{label} {val}</p>
  )
}

// App component
function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (stat) => {
    switch(stat){
      case 'good': setGood(good +1);
                  break;
      case 'neutral': setNeutral(neutral +1);
                  break;
      case 'bad': setBad(bad +1);
                  break;
    }
  }

  const getAll = () => {
    return good + bad + neutral
  }
  const getAverage = () => {
    return (good - bad) / (good+bad+neutral) || 0;
  }
  const getPositive = () => {
    return ((good)/(good+bad+neutral) || 0)+'%';
  }

    return (
    <div >
      <h2>Give Your Feedback</h2>
        <Button handler={()=>handleClick('good')} label=' Good' />
        <Button handler={()=>handleClick('neutral')} label=' Neutral' />
        <Button handler={()=>handleClick('bad')} label=' Bad' />
      <h2>Statistics</h2>
      {
        getAll() &&  
        <div>
          <Stat label='Good' val={good}/>
          <Stat label='Neutral' val={neutral}/>
          <Stat label='Bad' val={bad}/>
          <Stat label='Total' val={getAll()}/>
          <Stat label='Average' val={getAverage()}/>
          <Stat label='Positive' val={getPositive() }/>
        </div>
      }
       
    </div>
  )
}

export default App;
