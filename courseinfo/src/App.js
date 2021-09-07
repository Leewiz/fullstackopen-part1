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
      <Part title={props.parts[0].name} count={props.parts[0].exercises} />
      <Part title={props.parts[1].name} count={props.parts[1].exercises} />
      <Part title={props.parts[2].name} count={props.parts[2].exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header text={course} />
      <Content parts={[part1, part2, part3]} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App