import React from 'react'
import ReactDOM from 'react-dom'

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
    const Content = () => {
        return (
            <div>
                <Part name={part1.name} exercise={part1.exercises} />
                <Part name={part2.name} exercise={part2.exercises} />
                <Part name={part3.name} exercise={part3.exercises} />
            </div>
        )
    }
    const Total =()=>{
        return(
            <div>
                <p></p>
                <p>Number of exercises {part1.exercises + part2.exercises +part3.exercises}</p>
                </div>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Content />
            <Total />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
