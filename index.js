const mongo = require("mongoose") // How to call library/Dependency/Module

const http = require("http")





const server = http.createServer((req, res) =>{
    if (req.url === "/"){
        res.write("Hello world")
        console.log("New connections...");
        res.end()
    }

    if (req.url === "/api/course") {
        res.write(
            JSON.stringify({
                status: "200",
                data: [
                    {
                        user: "Daniels",
                        id: 1,
                    },
                    {
                        user: "Paul",
                        id: 2,
                    },
                    {
                        user: "Samuel",
                        id: 3,
                    }
                ]
                
            })
        )};
        res.end()
})

server.listen(3000, ()=>{
    console.log("Listening on port 3000");

    
    })

    