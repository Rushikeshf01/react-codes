import { useState } from 'react'
import Joke from './components/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joke />
    </>
  )
}

export default App
