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
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={good + neutral + bad} />
                <Statistic text="average" value={Math.round((good + (-1) * bad) / (good + neutral + bad)*10)/10} />
                <Statistic text="positive" value={Math.round(good / (good + neutral + bad) * 100*10)/10} />
            </div>
        )
    } else return (<div>
        <h1>statistics</h1>
        <p>No feedback is given</p></div>)
}

const Statistic = (props) => {
    const value = props.value
    const text = props.text

    if (text !== "positive") return (
        <table>
                <tbody>
                    <tr>
                        <td width="70px">{text}</td>
                        <td width="70px">{value}</td>
                    </tr>
                </tbody>
        </table>
            );
            else return (
        <table>
                <tbody>
                    <tr>
                        <td width="70px">{text}</td>
                        <td width="70px">{value}%</td>
                    </tr>
                </tbody>
            </table>
            )
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
