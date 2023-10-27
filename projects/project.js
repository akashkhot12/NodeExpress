const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    console.log("server is waiting");
})
 server.listen(9000,'127.0.0.1',()=>{
    console.log("server is starts");
 })