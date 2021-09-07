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
const StatisticLine = ( {text, value }) => {
  return (
    <div>
      { text } { value }
    </div>
  )
}

const Statistics = ({ stats }) => {
  return (
    <div>
      <StatisticLine text='good' value={ stats.good } />
      <StatisticLine text='neutral' value={ stats.neutral } />
      <StatisticLine text='bad' value={ stats.bad } />
      <StatisticLine text='total' value={ stats.total } />
      <StatisticLine text='average' value={ stats.average } />
      <StatisticLine text='positive' value={ stats.positive } />
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

  const getTotal = () => good + neutral + bad
  const getAverage = () => (good - bad) / getTotal()

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: getTotal(),
    average : getAverage(),
    positive : good / getTotal()
  }


  if(good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <Header text='give feedback' />
        <Button handleClick={ handleGoodClick } text='good' />
        <Button handleClick={ handleNeutralClick } text='neutral' />
        <Button handleClick={ handleBadClick } text='bad' />
        <Header text='statistics' />
        <Statistics stats={ statistics } />
      </div>
    )
  }
  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={ handleGoodClick } text='good' />
      <Button handleClick={ handleNeutralClick } text='neutral' />
      <Button handleClick={ handleBadClick } text='bad' />
      <Header text='statistics' />
      <p>No feedback given</p>
    </div>
  )
  
}

export default App