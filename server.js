const fs = require ("fs"); 
fs.readFile ("./welcome.txt", (err,data) =>{
err ? console.log (err) : console.log (data.toString())
})

const http = require ("http");
http
    .createServer((request, Response) =>{
        Response.end("Hello Node !!!!");
    })
    .listen (3000);