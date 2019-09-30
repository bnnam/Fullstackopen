import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises = 10
        },

        {
            name: 'Using props to pass data',
            exercises = 7
        },

        {
            name: 'State of a component',
            exercises = 14
        }
    ]

    const Header = (props) => {
        console.log(props)
        return (
            <h1>{props.course}</h1>
        )
    }
    const Content = (props) => {
        return (
            <div>
                {props.forEach (value=>
                {
                    console.log(value)
                    value.name + " " + value.exercises
                }    
                )
            }
            </div>
        )
    };
    const Total = (props) => {
        const totalexercises=0
        return (
            <div>
                <br></br>
                {props.forEach(value=>{
                    totalexercises+=value.exercises
                })}
                console.log(totalexercises)
                Number of exercises = {totalexercises}
            </div>
        )
    }


    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}/>

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
