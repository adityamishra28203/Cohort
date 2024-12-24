import { useMemo } from 'react'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(1)
  const [counter, setCounter] = useState(0)

  //this is rendering everytime event the sum value is not changing because of counter value is changing
  // let sum = 0
  // for(let i=1; i <= inputValue; i++) {
  //   sum+=i;
  // }

  //we will use useMemo hook to memorize the sum value for all the re-rendering until the inputValue is changed

  let sum = useMemo( () => {
    let finalSum = 0
    for( let i=1; i <= inputValue; i++ ) {
      finalSum += i;
    }
  }, [inputValue])

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
