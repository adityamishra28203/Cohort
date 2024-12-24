import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(1)
  const [counter, setCounter] = useState(0)

  let sum = 0
  for(let i=1; i <= inputValue; i++) {
    sum+=i;
  }

  return <div>
    <input onChange={ function (e) { setInputValue(e.target.value)}} placeholder='Find sum from 1 to n'></input> 
    <br></br>
    Sum from 1 to {inputValue} is {sum}
    <br></br>
    <button onClick={ function () {
      setCounter(counter+1)
    }}>Counter ({counter})</button>
  </div>
}
export default App;
