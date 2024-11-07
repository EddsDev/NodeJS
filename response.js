const mongo = require("mongoose")

const http =require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Welcome to S and S platform")
        console.log("New connections...");
        res.end()
    }

    if (req.url === "/api/catalog"){
        res.write(
            JSON.stringify({
                status: "302",
                data: [
                    {
                        Product: "Organic apple",
                        price: "$2.99",
                        Description: "Fresh from local apples from local farms"
                    },
                    {
                        Product: "Okra",
                        price: "$5.99",
                        Description: "A basket of okra for your favorite soup"
                    },
                    {
                        Product: "Broccoli",
                        price: "$1.99",
                        Description: "Fresh green broccoli, perfect for salads and meals"
                    }
                ]
            })
        
        )};
    
    // res.end()
})

server.listen(5000, ()=>{
    console.log("Listening on port 5000");
})