import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    if (good + neutral + bad !== 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {good + neutral + bad}</p>
                <p>average {(good + (-1) * bad) / (good + neutral + bad)}</p>
                <p>positive {good / (good + neutral + bad) * 100} %</p>


            </div>
        )
    } else return (<div>
        <h1>statistics</h1>
        <p>No feedback is given</p></div>)
}


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}> good </button>
            <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
            <button onClick={() => setBad(bad + 1)}> bad </button>
            <Statistics good={good} neutral={neutral} bad={bad} />



        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
