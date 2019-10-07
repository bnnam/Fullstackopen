import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const setGood = ()=>{
        return (
            <Statistics good={good} neutral={neutral} bad={bad}/>
            )
    }
    const Statistics = (props) => {
        let total = props.good + props.neutral + props.bad
        return (
            <div>
                <h1>statistics</h1>
                <p>good {props.good}</p>
                <p>neutral {props.neutral}</p>
                <p>bad {bad.props}</p>
                <p>all {good + neutral + bad}</p>
                <p>average {(good + (-1) * bad) / (good + neutral + bad)}</p>
                <p>positive {good / (good + neutral + bad) * 100} %</p>
            </div>
        )
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}> good </button>
            <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
            <button onClick={() => setBad(bad + 1)}> bad </button>





        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
