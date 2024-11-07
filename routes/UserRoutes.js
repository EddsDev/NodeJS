const express = require('express')

const route = express.Router()

const Joi = require("joi");

const users = [
    {
        id: 1,
        name: "John Doe",
        age: 22,
    },
    {
        id: 2,
        name: "John Doe",
        age: 22,
    },
    {
        id: 3,
        name: "John Doe",
        age: 22,
    },
];



route.get("/", (req, res) =>{
    res.send(users);
})

route.get("/:id", (req, res)=>{
    const id =req.params.id;

    const user = users.find((user) => user.id === parseInt(id));
    console.log(user)

if(user) {
    res.status(200).send({
        message: "User found",
        data: user,
        date: new Date().toLocaleTimeString(),
    });

} else{
    res.status(404).send({
        message: "user not found"
    });
}

})





route.post("/", (req,res) =>{
   
    // Validate the data
  const result =validateRequest(req.body);
    
   if (result.error){
    return res.status(400).send({
        message: result.error.details[0].message,
    });
   }


   const {name, age} = result.value;



    // Create a new user
    const user ={
        id: users.length + 1,
        name,
        age,
    };
    // add user to the users array
    users.push(user);
    // Send the response
    res.status(201).send({
        message: "User created",
        data: user,
    });
})


route.put("/:id", (req, res)=>{
    // Get the id from the request parameters
    const id = req.params.id;
    // Get the data from the request body
    const {name} = req.body;
    //Validate the data
    if(!name){
        return res.status(400).send({
            message:"Name is required",
        });
    }
    // Find the user with the id
    const user = users.find((user) => user.id === parseInt(id));
    // Update the user
    user.user = name;
    // Send the response
    res.status(200).send({
        message: " User updated",
        data: user,
    });
})

route.delete("/:id", (req, res)=>{
    // Get the id from the request parameters
    const id = req.params.id;

    // Find the user with the id
    const index = users.findIndex((user) => user.id === parseInt(id));
    //Validate the data
    if(index === -1){
        return res.status(404).send({
            message:"user not found",
        });
    }
    // Delete the user
    users.splice(index, 1);
    // Send the response
    res.status(200).send({
        message: " User deleted",
    });
})

function validateRequest(body){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        age: Joi.number().required(),
       });

       return schema.validate(body);
}



module.exports = route

