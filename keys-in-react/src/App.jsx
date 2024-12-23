import { useState } from 'react'
import React from 'react'

let counterId = 0;
function App() {
  const [todos, setTodos] = useState([{
      id: 1,
      title: "do dsa",
      description: "do dsa"
    },{
      id: 2,
      title: "do job",
      description: "do job"
    },{
      id: 3,
      title: "do web-dev",
      description: "do web-dev"
    }
])
function addTodo() {
  setTodos([...todos, {
    id: counterId++,
    title: Math.random(),
    description: Math.random()
  }])
}

  return (
    <>
      <button onClick={addTodo}>Click to Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}  
    </>
  ) //added key for every todo (elements of todo array)
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
