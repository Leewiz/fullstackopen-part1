import React, { useState } from 'react'

const Anecdote = ({ text, vote }) => {
  const content = text + '\nhas ' + vote + ' votes'
  return (
    <div style={{whiteSpace: "pre-line"}}>
        { content }
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      { text }
    </button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))

  const getRandom = (max) => Math.floor(Math.random() * max)
  const handleRandomSelection = () => setSelected(getRandom(anecdotes.length))
  const handleVoteClick = () => setVotes(
    votes.map(
      (vote, index) => selected === index ? (vote + 1) : vote
    )
  )
  return (
    <div>
      <Anecdote text={anecdotes[selected]} vote={votes[selected]} />
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleRandomSelection} text='next anecdote' />
    </div>
  )
}

export default App