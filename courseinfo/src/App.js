import React from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.count}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.titles[0]} count={props.counts[0]} />
      <Part title={props.titles[1]} count={props.counts[1]} />
      <Part title={props.titles[2]} count={props.counts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.count}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course} />
      <Content titles={[part1, part2, part3]} counts={[exercises1, exercises2, exercises3]} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App