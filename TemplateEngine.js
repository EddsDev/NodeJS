const express = require('express');
const Joi = require("joi");

const app = express();

app.use(express.json());

app.set('view engine', 'pug')


app.get("/", (req, res) => {
    res.render("index", {title: "Hey", message: "Hello there!", content: "This is the content of my page"});
});

app.listen(4000, () => {
    console.log("Sever is running on port 4000")
})