import React from 'react';


const Header = ({course}) => {
  return (
    <h2>{course.name}</h2>
  )
} 

const Content = ({ course }) => {
  return (
    course.parts.map( el => {
      return <p key={el.id}>{el.name} {el.exercises}</p>
    })
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

const Course = ({course}) => {
  return(
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default Course;