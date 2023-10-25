const http = require('http')

const server  = http.createServer((req,res)=>{
    res.end("<h1>this is your server</h1>")
    console.log("your server is upgrated");

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("your data");
})

