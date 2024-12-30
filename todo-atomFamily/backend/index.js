const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const port = 3000;

const todos = [
    {
        id: 1,
        title: "gym",
        description: "hit the gym today"
    },
    {
        id: 2,
        title: "cohort",
        description: "complete the course today" 
    },
    {
        id: 3,
        title: "medicine",
        description: "take all the medicines today" 
    }
]

app.get("/todo", function(req, res) {

    const todo = todos.find(t => t.id === parseInt(req.query.id));
    if(!todo) {
        return res.status(404).send('Not found');
    }else {
        res.json({todo});
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});