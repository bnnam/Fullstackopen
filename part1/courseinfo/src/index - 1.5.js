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
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
      const Header = (props) => {
        return (
            <div>
                <h1>{props.course.name}</h1>
                </div>
        )
    }
    const Part = (props) => {
        return (
            <div>
                {props.name} {props.exercise}
            </div>
        )
    }
    const Content = (props) => {
        const name1=props.course.parts[0].name
        const exercise1=props.course.parts[0].exercises
        const name2=props.course.parts[1].name
        const exercise2=props.course.parts[1].exercises
        const name3=props.course.parts[2].name
        const exercise3=props.course.parts[2].exercises
        return (
            <div>
                <Part name={name1} exercise={exercise1} />
                <Part name={name2} exercise={exercise2} />
                <Part name={name3} exercise={exercise3} />
            </div>
        )
    }
    const Total = (props) => {
        const exercise1 = props.course.parts[0].exercises
        const exercise2 = props.course.parts[1].exercises
        const exercise3 = props.course.parts[2].exercises
        return (
            <div>
                <p></p>
                <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
            </div>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
