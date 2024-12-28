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
      id: Date.now(), // Unique ID based on timestamp
      title,
      description,
      visible: true, // Set initially visible
    };

    // Add todo to the state
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear input fields
    setTitle("");
    setDescription("");

    // After 3 seconds, hide the todo by setting visible to false
    setTimeout(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === newTodo.id ? { ...todo, visible: false } : todo
        )
      );
    }, 5000); // Set the todo to invisible after 3 seconds
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
      {todos.filter((todo) => todo.visible).length > 0 ? (
        todos
          .filter((todo) => todo.visible) // Only show todos that are visible
          .map((todo) => (
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