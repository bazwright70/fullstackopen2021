import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'


const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    }
    ,
    {
      name: 'Using props to pass data',
      exercises: 7
    }
    , {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      {parts.map((part, i) => {
        return <Content key={i} name={part.name} exercises={part.exercises} />
      })}

      <Total total={
        parts.reduce((prev, next) => {
          return prev + next.exercises
        }, 0)

      } />
    </div>
  )
}

export default App;
