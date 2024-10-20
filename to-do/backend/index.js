const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const app = express();

app.use(express.json());


app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    
    if (!parsedPayload.success){
        res.status(11).json({
            msg: "Invalid inputs"
        });
        return;
    }
    //put in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
})


app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid todo"
        });
        return;
    }
    //updating in mongodb
    await todo.updateOne({
        _id: parsedPayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo marked as completed"
    })
})

app.listen(3000);