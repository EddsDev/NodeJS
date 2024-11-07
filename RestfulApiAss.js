const express = require('express');
const Joi = require("joi");
const auth = require("./middlewares/auth")
const logger = require("./middlewares/logger")


const app = express();
app.use(auth);
app.use(logger);

app.use(express.json());

const todos = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Get milk, eggs, bread, and vegetables",
        priority: "High",
        status: "Incomplete",
        Duedate: "2024-10-31"
    },
    {
        id: 2,
        Title: "Finish coding Homework",
        Description: "Complete the Express.js routing for the todo app",
        Priority: "Medium",
        Status: "In Progress",
        Duedate: "2024-11-02"
    }
];

app.get("/", (req, res) =>{
    // console.log(req);
    
    res.send(todos);
})

app.get("/todos/:id", (req, res) =>{
    const id = req.params.id;

    const todo = todos.find((t) => t.id === parseInt(id));
    // console.log(todo)

    if(todo) {
        res.status(200).send({
            message: " Task retrived! Ready to get things done? ",
            data: todos,
            date: new Date().toLocaleTimeString(),

        });
    } else{
        res.status(404).send({
            message: "Oops we couldn't find the Todo task you are looking for!"
        });
    }


})

app.post("/todos", (req, res) =>{
    // Validate the data
    const result = validateRequest(req.body);

    if (result.error){
        return res.status(400).send({
            message: result.error.details[0].message,
        });
    }


    const { title, description, priority, status, ...more } = result.value;

    // Create a Todo
    const todo = {
        id: todos.length + 1,
        title,
        description,
        priority,
        status,
        more
    };

    // add Todo to the Todos array
    todos.push(todo);

    // Send the response
    res.status(201).send({
        message: "Yay! your new task has been created successfuly.",
        data: todo,
    });
})

app.put("/todos/:id", (req, res) =>{
    // Get the ID from the request parameters
    const id = req.params.id;
    // Get the data from the request body
    const {title} = req.body;
    // Validate the data
    if(!title){
        return res.status(400).send({
            message: "Title is required, try again!",
        });
    }

    // Find the todo with the ID 
    const todo = todos.find((todo) => todo.id === parseInt(id));
    // update the Todo
    todo.todo = title;
    //Send the response
    res.status(200).send({
        message: "Task has been successfully updated!",
        data: todo,
    });
})

app.delete("/todos/:id",(req, res) =>{
    //Get the Id from the request parameters
    const id = req.params.id;
    // Find the todo with the Id
    const index = todos.findIndex((user) => user.id === parseInt(id));
    // Validate the data
    if(index === -1){
        return res.status(404).send({
            message: "Todo not found, try again!"
        });
    }

    // Delete the Todo
    todos.splice(index, 1);
    // Send the response
    res.status(200).send({
        message: "Todo successfully deleted!"
    });
})



app.listen(4000, () => {
    console.log("Sever is running on port 4000")
})

function validateRequest(body){
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        priority: Joi.string().min(3).required(),
        status: Joi.string().min(3).required(),
        more: Joi.string().min(3).required(),
       });

       return schema.validate(body);
}
