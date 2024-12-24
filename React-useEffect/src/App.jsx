import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

function App () {

  const [selectedId, setSelectedId] = useState(1)

  return <div>
    <button onClick={ function () {
      setSelectedId(1);
      }}>1</button>
    <button onClick={ function () {
      setSelectedId(2);
      }}>1</button>
    <button onClick={ function () {
      setSelectedId(3);
      }}>1</button>
    <button onClick={ function () {
      setSelectedId(4);
      }}>1</button>

    <Todo id={selectedId}/>
  </div>
}

function Todo({id}) {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then( function(response) {
      setTodos(response.data.todos)
    })
  }, [id])

  return <div>
    <h1>{todos.title}</h1>
    <h4>{todos.description}</h4>
  </div>
}

export default App
