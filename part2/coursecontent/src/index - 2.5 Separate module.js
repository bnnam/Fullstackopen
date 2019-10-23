import React from 'react'
import ReactDOM from 'react-dom'
import Course from './course'

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

  const halfStackCourse = courses.filter(coursef => coursef.id === 1)
  console.log(halfStackCourse)
  const nodejsCourse = courses.filter(coursef => coursef.id === 2)
  console.log(nodejsCourse)

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={halfStackCourse[0]} />
      <Course course={nodejsCourse[0]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
