import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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
    const Header = (props) => {
        return (
            <div>
                <h1>{props.course}</h1>
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
        return (
            <div>
                <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
                <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
                <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
            </div>
        )
    }
    const Total = (props) => {
        const exercise1 = props.parts[0].exercises
        const exercise2 = props.parts[1].exercises
        const exercise3 = props.parts[2].exercises
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
            <Content parts={parts} />
            <Total parts={parts} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
