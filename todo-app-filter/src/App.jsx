import React, { useState } from "react"
import { filterAtom, filteredTodos, todoAtom } from "./todo"
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil"


function App () {
  return (
   <RecoilRoot>
    <Todo />
    <FilteredTodo />
    <DisplayTodos/>
   </RecoilRoot> 
   
  )
}

const Todo = React.memo(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const setTodos = useSetRecoilState(todoAtom)

  const addTodo = () => {
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required!");
      return;
    }

    // Create a new todo with a visible flag
    const newTodo = {
      id: Math.random(), // Unique ID based on timestamp
      title,
      description,
    };

    // Add todo to the state
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear input fields
    setTitle("");
    setDescription("");
  };
  
  return (
    <div>
        <input placeholder="title" onChange={ (e) => { setTitle(e.target.value)}}></input>
        <input placeholder="description" onChange={ (e) => {setDescription(e.target.value)}}></input>
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
})


const FilteredTodo = React.memo(() => {    
  const setFilterWord = useSetRecoilState(filterAtom);
 
  const updateFilter = (value) => {
    setFilterWord({ filterWord: value }); // Update the filterWord property
  };
  return <div>
    <input type='text' placeholder='type to filter todos' onChange={(event)=>{updateFilter(event.target.value)}}></input>    
  </div>
})

const DisplayTodos = React.memo(() => {
  const todos = useRecoilValue(filteredTodos);

  return (
    <div>
      {todos.length > 0 ? (todos.map((todo) => (
            <div key={todo.id}>
              <h3>Title: {todo.title}</h3>
              <p>Description: {todo.description}</p>
            </div>
          ))
      ) : (
        <p>No Todo found with matching filter</p>
      )}
    </div>
  );
})

export default App