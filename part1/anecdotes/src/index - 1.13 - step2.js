import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const anecdoteMaxcursor = props.anecdotes.length - 1
    const randomNumber = Math.floor(Math.random() * (anecdoteMaxcursor + 1))

    
    console.log(randomNumber)
    // console.log(randomNumber)
    const addVote = () => {
        points[randomNumber] += 1
        setSelected(selected + 1)
        
    }
    return (
        <div>
            <p>{props.anecdotes[randomNumber]}</p>
            <p> </p>
            <p>has {points[randomNumber]} votes</p>
            <button onClick={() => addVote()}>vote</button>
            <button onClick={() => setSelected(selected + 1)}>next anecdote</button>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = Array.from(Array(anecdotes.length).keys()).fill(0)
ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
