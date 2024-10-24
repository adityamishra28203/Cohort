import React from 'react'
import { useState } from 'react'

function App() {     
  const [title, setTitle] = useState("My name is Aditya")
  function updateTitle() {
    setTitle("My name is " + Math.random())     
  }  

  return (
      <div>
        <button onClick={updateTitle}>Click me to change the title</button>  
        <Header title={title} />                       
        <Header title = "My name is Aditya" />   
        <Header title = "My name is Aditya" /> 
        <Header title = "My name is Aditya" /> 
        <Header title = "My name is Aditya" />    
      </div>
  )                         
}                         

//it will only re-render the Header comp with updated title, other Header comps will not re-render as their props are not changed
const Header = React.memo(function Header ({title}) {  
  return <div>
    {title}
  </div>
})

export default App
