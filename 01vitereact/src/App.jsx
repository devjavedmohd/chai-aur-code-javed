import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log(counter)
    if (counter < 20) {
      return setCounter(counter + 1)
    } else {
      return false
    }
  }

  const removeValue = () => {
    console.log(counter)
    if (counter > 0) {
      return setCounter(counter - 1)
    } else {
      return false
    }
  }

  return (
    <>
      <h1>Vite react.js</h1>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>+ Add Value</button>
      <button onClick={removeValue}>- Remove Value</button>
    </>
  )
}

export default App
