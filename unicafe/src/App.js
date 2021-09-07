import React, { useState } from 'react'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{ text }</h1>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={ handleClick }>
    { text }
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

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  
  const total = good + neutral + bad

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={ handleGoodClick } text='good' />
      <Button handleClick={ handleNeutralClick } text='neutral' />
      <Button handleClick={ handleBadClick } text='bad' />
      <Header text='statistics' />
      <Statistic text='good' value={ good }/>
      <Statistic text='neutral' value={ neutral }/>
      <Statistic text='bad' value={ bad }/>
      <Statistic text='total' value={ total }/>
      <Statistic text='average' value={ (good - bad) / total } />
      <Statistic text='positive' value={ good / total } />
    </div>
  )
}

export default App