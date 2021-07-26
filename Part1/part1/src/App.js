import React, { useState } from 'react';

const App = () =>  {
  const [counter, setCounter ] = useState(0);

  const handleClick = () =>{
    console.log('Clicked..')
    setCounter(counter + 1)
  }

  console.log('Rendering ...')
    return (
    <div>
        {counter}
        <button onClick = {handleClick}>Click Me</button>
    </div>
    
  );
}

export default App;
