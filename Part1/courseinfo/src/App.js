import React from 'react';

const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const  total = exercises1 + exercises2 + exercises3;

const Header = ({courseName}) => {
  return(
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Part = ({part, exercise}) => {  
  return(
    <div>
      <p>{part} {exercise}</p>
    </div>
  )
}

const Total  = ({total}) => {
  return(
    <div>
      <h1>Number of exercises is {total}</h1>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  )
}

function App() {

  return (
    <div>
      <Header courseName={course}/>
      <Content />
      <Total total={total}/>
    </div>
  );
}

export default App;
