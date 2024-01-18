import {useState} from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    
  }

  const zero = () => {
    setCounter(counter = 0)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <br/>
    <h2>Counter Value : {counter}</h2>
    <br/>

    <button
    onClick={addValue}
    >Add Value : {counter}</button>
    <br/>

    <button
    onClick={removeValue}
    >Remove Value : {counter} </button>
    <br/>

    <button
    onClick={zero}
    >zero {counter} </button>
      
    </>
  )
}

export default App
