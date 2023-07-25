import {useState} from 'react'

import './styles/joke.css'

import axios from 'axios'
import Button from '@mui/material/Button'

export default function Joke() {
    const [joke , setJoke] = useState(null)
    const getJoke = async () => {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setJoke(response.data)
    }
    return (
        <>
        <div className='container'>

        <div className='joke-box'>
        <h2>Joke of the day</h2>
        {joke && (
            <div>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>
        )}
        </div>
        <Button variant="contained" onClick={getJoke}>Get Joke</Button>
        {joke && <p>Not funnier than your life.</p>}
        </div>
        </>
    )
}