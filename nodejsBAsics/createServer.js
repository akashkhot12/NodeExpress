// mension server http
const { log } = require('console');
const http = require('http');

//create a server 
const server = http.createServer((req,res)=>{
    console.log('running a server');
}).listen(8000,()=>{
    console.log("genrate this server");
})


