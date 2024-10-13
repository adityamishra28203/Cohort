import { useState } from 'react' //hook- {useState} to define state

function App() {
  const [count, setCount] = useState(0)    // count is a variable and setCount is a function which is re-rendering the components 
  return (
    <div>
      <customButton count={count} setCount={setCount}></customButton>
    </div>
  )
};

//button component
function customButton (props) {
  function onClickHandler() {
    props.setCount(count + 1);
  }
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
};

export default App
