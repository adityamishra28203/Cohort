import { useState } from 'react'

function App() {          //only render the HeaderWithButton Component and static header component and only run first time loading after that only component re-render
  return (
      <div>
        <HeaderWithButton />                      
        <Header title = "My name is Aditya" />      
      </div>
  )                             //passing title as props in Header Component
}

function HeaderWithButton() {                     //maintaining the state here because everytime the state changes--> app re-renders
  const [firstTitle, setFirstTitle] = useState("My name is Aditya")
  console.log("Headerbut comp")
  function changeTitle() {
    setFirstTitle("My name is " + Math.random())      //it will channge the state when button is clicked
    console.log("change func")
  }
  console.log("Header return")  
  return <>
    <button onClick={changeTitle}>Click me to change the title</button>    
    <Header title={firstTitle} />
  </>
}                           //onclick call the function function will change the staee and Header will pass with the updated title

function Header ({title}) {     //component to display the updated title
  console.log("Header comp")
  return <div>
    {title}
  </div>
}

export default App
