const express = require("express");
const joi = require("joi");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use("/api/admin", (req, res, next) =>{
    req.user = 'admin'
    console.log("Admin Middleware");
})


const port = process.env.PORT || 5000; // get the port from the environment variables or use 5000
console.log(port);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})