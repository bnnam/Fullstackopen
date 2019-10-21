import React from 'react'

const Course = (props) => {
  const header = props.course.name
  const parts = props.course.parts
  console.log("parts =", parts)
  const Header = () => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        <h1>{header}</h1>
      </div>
    )
  }

  const Content = () => {
    const rows = parts.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>);
    console.log("rows =", rows)
    return (
      <div>
        {rows}
      </div>
    )
  }

  const Total = () => {
    const sumExercises = parts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)
    return (
      <div><strong>total of {sumExercises} exercises</strong></div>
    )
  }
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}



export default Course