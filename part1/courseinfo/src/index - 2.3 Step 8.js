import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },      {
        name: 'Using props to pass data test',
        exercises: 15
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Course = (props) => {
    const header = props.course.name
    const parts = props.course.parts
    console.log("parts =", parts)
    const Header = () => {
      return (
        <div>
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
      let sumExercises = parts.reduce((sum, currentValue) => {
        console.log("sum",sum) 
        console.log("current value",currentValue.exercises)
        return sum+currentValue.exercises
      },0)

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
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
