
import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Total = ({course}) => {
  const sum = course.parts.reduce((accum, curr)=>{
    return accum + curr.exercises;
  },0)
  return(
    <h3>Total of {sum} exercises</h3>
  )
}

const Content = ({ course }) => {
  return (
    course.parts.map( el => {
      return <p key={el.id}>{el.name} {el.exercises}</p>
    })
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
    

  return (
    courses.map( course => {
      return <Course key={course.id} course={course} />
    })
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


