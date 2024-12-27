import { useContext, useState } from "react"
import { CounterContext } from "../context";

//CounterContext- logic for the context (React-Comp.) will provide a object that is Provider which will teleport the value

function App () {
const [count, setCount] = useState(0);

// wrap the Comp. that wants to use the teleported value inside a provider

return (
  <div>
    <CounterContext.Provider value={{count, setCount}}>
      <Count />
    </CounterContext.Provider>
  </div>
)
}

//e.g. Count component donot using setCount state variable still we need to pass it Count comp. because Button comp. using it.

function Count () {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer () {

  const {count} = useContext(CounterContext) // use useContext hook to get the value of CounterContext provider provided
  return <div>
    {count}
  </div>
}


function Buttons () {

  const {count, setCount} = useContext(CounterContext)
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>

  </div>
}

export default App