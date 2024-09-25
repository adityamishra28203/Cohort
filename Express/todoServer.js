const express = require("express");
const bodyPparser = require('body-parser')
const app = express();
app.use(bodyPparser.json())

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id))
    if(!todo) {
        return res.status(404).send('Not found');
    }else {
        res.json(todo);
    }
})

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() *100000),
        title: req.body.title,
        description: req.body.description,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo)
})

app.put('/todos/:id',(req, res) =>{
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id))
    if(todoIndex === -1)
        return res.status(404).send()
    else{
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.status(201).send('Updated');
        res.json(todos[todoIndex]);
    }       
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id))
    if(todoIndex === -1)
        return res.status(404).send()
    else {
        todos.splice(todoIndex, 1)
        res.status(200).send('Todo deleted')
    }
})

app.use((req, res, next) => {
        res.status(404).send();
    }
)

app.listen(3000);