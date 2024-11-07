console.log('Hey there');

setTimeout(() => {
    console.log("We begin the journey");
}, 2000);

console.log("Welcome to the word world of Node.js")


// Example of callback function
function fetchDataCallback(callback){
    setTimeout(() => {
        callback("Data fetched using callback");
    }, 1000);
}

fetchDataCallback((data) =>{
    console.log(data);
});


// A call back function is a function that is passed as an to another function to be executed 
const users = [
    {
        id: 1,
        name: "John Doe",
        age: 22,
    },
    {
        id: 2,
        name: "John Doe",
        age: 25,
    },
    {
        id: 3,
        name: "John Doe",
        age: 30,
    },
    
];

// const getUser = (id, displayUser) => {
//     setTimeout(()=>{
//         const user = users.find((user) => user.id === id);
//         displayUser(user);
//     }, 2000);
// };

// console.log("start");
// getUser(1, (res) =>{
//     console.log(res);
// })

// console.log("Before");

const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user
};

// Example of a promise
function fetchDataPromise() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000)
    });
}

fetchDataPromise().then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})

// Example of async/await using function Declaration
async function fetchDataAsync() {
    const data = await fetchDataPromise();
    console.log(data);    
}

fetchDataAsync();

// Example of async/await using function Expression
const fetchUserData = async() => {
    const user = await getUser(1);
    console.log(user);
}

fetchUserData();

console.log("start")

async function fetchTod0() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
}
fetchTod0();
console.log("End");