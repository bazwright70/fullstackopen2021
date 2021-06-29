import React from 'react';

const Header = ({ name }) => {
  console.log("Name: ", name)
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => {
    return acc += curr.exercises;
  }, 0);
  console.log("Sum of parts: ", sum)
  return (
    <p><b>Total number of exercises {sum}</b></p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div> {parts.map((part, idx) => <Part key={idx} part={part} />)} </div>
  )
}

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {
        courses.map((course) => {
          return (
            <>
              <Header id={course.id} name={course.name} />
              <Content parts={course.parts} />
              <Total parts={course.parts} />
            </>
          )

        })
      }
      {/* <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </div>
  )
}

export default Course;