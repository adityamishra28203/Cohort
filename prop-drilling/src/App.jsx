import { useState } from "react"

function App () {
const [count, setCount] = useState(0);

return (
  <div>
    <Count count={count}/>
    
  </div>
)
}

//e.g. Count component donot using setCount state variable still we need to pass it Count comp. because Button comp. using it.

function Count ({count, setCount}) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>
  </div>
}

function Buttons ({count, setCount}) {
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