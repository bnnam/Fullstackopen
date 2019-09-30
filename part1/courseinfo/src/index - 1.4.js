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
        console.log(props)
        return (
            <h1>{props.course}</h1>
        )
    }

    const Content = (props) => {
        console.log(props.partC)
        const listItems = props.partC.map(d =>
            //console.log(d);
            <ul key={d.name}>{d.name} {d.exercises}</ul>
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }
    const Total = (props) => {
        console.log(props.partT)
        let totalnumber=0
        props.partT.map(d =>
            //console.log(d);
            totalnumber= totalnumber + d.exercises
        );
        return(
            <div>
                Total exercises: {totalnumber}
            </div>
        )
    }


    return (
        <div>
            <Header course={course} />
            <Content partC={parts} />
            <Total partT={parts} />

        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
