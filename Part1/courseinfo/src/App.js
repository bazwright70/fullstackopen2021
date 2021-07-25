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

const Total  = ({parts}) => {
  const total = parts.reduce( (acc, curr)=>{
    return acc + curr.exercises
  },0 )

  return(
    <div>
      <h1>Number of exercises is {total}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises}/>
      <Part part={parts[1].name} exercise={parts[1].exercises}/>
      <Part part={parts[2].name} exercise={parts[2].exercises}/>
    </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name:  'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data' ,
        exercises:7
      },
      {
        name: 'State of a component' ,
        exercises:14
      }
    ]
  } 

  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;
