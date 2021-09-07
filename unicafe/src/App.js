import React, { useState } from 'react'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{ text }</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <div>
      { text } { value }
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Statistic text='good' value={ good }/>
      <Statistic text='neutral' value={ neutral }/>
      <Statistic text='bad' value={ bad }/>
    </div>
  )
}

export default App