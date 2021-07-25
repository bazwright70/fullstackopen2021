import React from 'react';

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

const Content = ({part1,part2,part3}) => {
  return(
    <div>
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part2.exercises}/>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name:  'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data' ,
    exercises:7
  }
  const part3 = {
    name: 'State of a component' ,
    exercises:14
  }
  const  total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header courseName={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={total}/>
    </div>
  );
}

export default App;
