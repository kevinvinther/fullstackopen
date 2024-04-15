import { useState } from "react";

const Highlight = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const getHighestVoted = () => {
    let max = 0;
    let index = 0;
    for (let i = 1; i < anecdotes.length; i++) {
      if (points[i] > max) {
        index = i;
        max = points[i];
      }
    }

    return index;
  };

  const setRandomSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteForAnecdote = (anecdote) => {
    const copy = { ...points };

    copy[selected] += 1;

    setPoints(copy);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} votes!</p>
      <button onClick={() => setRandomSelected()}>Random Anecdote</button>
      <button onClick={() => voteForAnecdote()}>Vote</button>
      <Highlight
        title="Highest Voted Anecdote"
        body={anecdotes[getHighestVoted()]}
      />
    </div>
  );
};

export default App;
