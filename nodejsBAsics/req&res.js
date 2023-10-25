const http = require('http')
const fs  =  require('fs')

const html=fs.readFileSync('../files/index.html','utf-8')

const server  = http.createServer((req,res)=>{
    res.end(html)
    console.log("your server is upgrated");

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("your data");
}) 

