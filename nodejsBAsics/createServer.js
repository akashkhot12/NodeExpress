// mension server http
const { log } = require('console');
const http = require('http');

//create a server 
const server = http.createServer((req,res)=>{
    console.log('running a server');
})

//genret the server
server.listen(8000,'127.0.0.1',()=>{
    console.log("genrate this server");
})


