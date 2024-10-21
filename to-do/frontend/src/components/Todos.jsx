
export function Todos({todos}) {
    return <div>
        {todos.map(function(todo){    //renders all the todos
            return <div>
                <h2>{todo.title}</h2>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}