const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
 }

function App() {
  const name = 'Peter';
  const age= 10;
    return (
    <div>
      <h1>Greetings</h1>
      <Hello name= {name} age={age}/>
      <Hello name='Daniel' age='14'/>
    </div>
  );
}

export default App;
