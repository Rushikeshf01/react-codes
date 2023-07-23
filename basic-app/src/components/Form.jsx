import {useState} from 'react'
import Strength from './Strength'

export default function Form() {
    const [password, setPassword] = useState('')
    const [inputState, setInputState] = useState({
        type: 'text',
        name: 'Hide'
    })

    const handleChange = (e) => {
        setPassword(e.target.value)
    }
    const handleInputType = () => {
        inputState.type === 'text' ? setInputState({type:'password',name:'Show'}) : setInputState({type:'text',name:'Hide'})
    }

    const handleClear = () => {
        setPassword('')
    }
    return (
        <>
        <h1>Form</h1>

            <input type={inputState.type} name="paaaword" value={password} onChange={handleChange}/>
            <button onClick={handleInputType}>{inputState.name}</button>
            <button onClick={handleClear}>clear</button>

            <Strength password={password}/>
        </>
    )
}