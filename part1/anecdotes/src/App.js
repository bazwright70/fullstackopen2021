import React, { useState } from "react";

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const arr = new Array(7).fill(0);

  const [votes, setVotes] = useState(arr);
  const [selected, setSelected] = useState(0);
  // const [topAnecdote, setTopAnecdote] = useState(0)

  let rand;

  const selectAnecdote = () => {
    rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand);
  }

  const updateVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const setTop = () => {
    const top = votes.indexOf(Math.max(...votes));
    if (votes.some(el => el > 0)) {
      return `"${anecdotes[top]}" has ${votes[top]} votes `;
    } else {
      return "No one has voted yet"
    }
  }


  return (
    <>
      <p><b>Anecdote of the day</b></p>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes.
      </p>

      <button onClick={updateVote}>Vote</button>
      <button onClick={selectAnecdote}>Next Anecdote</button>

      <p><b>Anecdote with the most votes</b></p>
      <p> {setTop()} </p>
    </>
  );
}

export default App;
