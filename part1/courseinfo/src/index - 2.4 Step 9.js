import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Course = (props) => {
    console.log("Props =", props.course)
    const header = props.course.name
    console.log("name =", header)
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
  const halfStackCourse = courses.filter(coursef => coursef.id === 1)
  console.log(halfStackCourse)
  const nodejsCourse = courses.filter(coursef => coursef.id === 2)
  console.log(nodejsCourse)

  return (
    <div>
      <Course course={halfStackCourse[0]} />
      <Course course={nodejsCourse[0]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
