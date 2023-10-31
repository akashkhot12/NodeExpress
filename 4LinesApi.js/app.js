const { write } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('server is running');
    res.end('this is website')
})
server.listen(4500,'127.0.0.1',()=>{
    console.log("application oper");
})