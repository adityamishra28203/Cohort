import { useState } from 'react' //hook- {useState} to define state

function App() {
  const [count, setCount] = useState(0);    // count is a variable and setCount is a function which is re-rendering the components 
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//button component
function CustomButton(props) {  //components to be rendered in React, it should start will capital letter

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
};

export default App
