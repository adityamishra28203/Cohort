import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();          //not the right way as it will keep hitting the API everytime the app re-renders, to avoid use useEffect hook
      setTodos(json.todos)
    })

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>  
      </div>
  )
}

export default App
