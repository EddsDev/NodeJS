 const express = require('express');
const app = express();

const userRoutes = require('./routes/UserRoutes')


app.use(express.json());

app.use("/api/v1/users",userRoutes);




// const port = process.env.PORT || 5000; // get the port from the environment variables or use 5000
// console.log(port);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})

